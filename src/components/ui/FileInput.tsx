function FileInput({ id }: Props) {
  return (
    <label htmlFor={id}>
      <span className="block pb-2 text-lg font-medium">Upload Logbook</span>
      <input id={id} type="file" accept=".txt" />
    </label>
  );
}

type Props = {
  id: string;
};

export default FileInput;
