import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-bold  text-lg py-3 px-6;
          }

          .btn-primary {
            @apply text-white bg-teal-700;
          }

          .btn-primary:hover {
            @apply bg-teal-300 text-red-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
