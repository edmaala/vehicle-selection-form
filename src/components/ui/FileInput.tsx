function FileInput({ id }: Props) {
  return (
    <label htmlFor={id} className="block pb-8">
      <span className="text-lg font-medium mb-4 mt-8 pr-4">
        Upload Logbook:
      </span>
      <input id={id} name={id} type="file" accept=".txt" required />
    </label>
  );
}

type Props = {
  id: string;
};

export default FileInput;
