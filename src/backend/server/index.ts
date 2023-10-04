// src/backend/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import multer from 'multer';
import { SubmittedVehicleData } from '../../models/ts-models';

const app = express();
const port = process.env.BACKEND_PORT ?? 4000;
const upload = multer();

app.use(cors());
app.use(express.json());

app.post('/upload', upload.single('logbook'), (req: Request, res: Response) => {
  let htmlResponse = '';
  try {
    const submittedData: SubmittedVehicleData = req.body;
    const logbook: Express.Multer.File | undefined = req.file;

    const allRawData = fs.readFileSync(
      './src/backend/submitted-data.json',
      'utf8'
    );
    const allJsonData = JSON.parse(allRawData);
    const updatedData = [...allJsonData, { ...submittedData, logbook }];

    fs.writeFileSync(
      './src/backend/submitted-data.json',
      JSON.stringify(updatedData),
      'utf8'
    );

    htmlResponse = `
      <html>
      <body>
        <p>Make: ${submittedData.make}</p>
        <p>Model: ${submittedData.model}</p>
        <p>Badge: ${submittedData.badge}</p>
        <br/>
        <br/>
        <p>Logbook:</p>
        <pre id="logbook">${logbook?.buffer.toString('utf-8')}</pre>
      </body>
      </html>
    `;
  } catch (error) {
    htmlResponse = 'Error encountered!';
  }

  res.send(htmlResponse);
});

app.listen(port, () => {
  // TODO: Add logger for port start
});
