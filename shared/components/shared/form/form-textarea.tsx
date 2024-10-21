import React from 'react';
import { useFormContext } from 'react-hook-form';
import { X } from 'lucide-react';
import { Textarea } from '../../ui';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

export const FormTextarea: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '');
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>
      <div className="relative">
        <Textarea className="h-12 text-md" {...register(name)} {...props} />
        {Boolean(value) && (
          <button
            onClick={onClickClear}
            className="absolute right-4 top-7 -translate-y-1/2 opacity-30 hover:opacity-100 cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      {errorText && <p className="text-red-500 text-sm mt-2">{errorText}</p>}
    </div>
  );
};
