type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '120' : '40';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="../logo-white.png" // Ganti ini sesuai nama file logomu di folder public
        alt="Logo"
        className="mr-2"
        width={size}
        height={size}
      />
    </span>
  );
};

export { Logo };
