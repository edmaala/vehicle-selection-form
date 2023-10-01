function FileInput({ id }: Props) {
  return (
    <label htmlFor={id} className="block pb-8">
      <span className="block pb-2 text-lg font-medium mb-4 mt-8">
        Upload Logbook
      </span>
      <input id={id} name={id} type="file" accept=".txt" />
    </label>
  );
}

type Props = {
  id: string;
};

export default FileInput;
