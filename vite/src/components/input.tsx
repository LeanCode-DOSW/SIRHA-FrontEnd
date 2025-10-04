interface Props {
  styles?: string;
  placeholder: string;
  type?: string;
}

export const Input = ({ styles = "", placeholder, type = "text" }: Props) => {

  return (
    <div className={`${styles} mb-4`}>
      <input
        type={type}
        placeholder={placeholder}
        className="outline mt-1 outline-sky-50 w-full h-[46px] px-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};
