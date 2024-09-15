import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

export const Inputters = ({
  isLoading,
  project,
  icon,
  style,
  type,
  onBlur,
}: {
  icon: React.ReactNode;
  project: any;
  style: string;
  type?: string;
  isLoading: boolean;
  onBlur: (e: any) => void;
}) => {
  const [isDisabled, setIsDisabled] = React.useState(true);

  return (
    <div className=" relative cursor-pointer w-full h-full ">
      {isDisabled && ( 
        <div
          className="z-20 w-full h-full absolute "
          onDoubleClick={() => {
            setIsDisabled(false); 
          }}
        ></div>
      )}
      {isLoading && 'loading'}
      <div className='flex items-center px-2 bg-card '>
     {icon} {type === "textArea" 
     ? <Textarea
    onBlur={(e) => {
      setIsDisabled(true); 
      onBlur(e); 
    }}
    disabled={isDisabled}
    className={` ${style} h-`}
    placeholder={project}
    defaultValue={project}
     />:type === "file"?

     <Input
     type='file'
     onChange={(e) => {
       onBlur(e); 
      //  setIsDisabled(true); 
     }}
    //  disabled={isDisabled}
     className={style}
     placeholder={"Change cover image"}
   />

     
     :
     <Input
        onBlur={(e) => {
          setIsDisabled(true); 
          onBlur(e); 
        }}
        disabled={isDisabled}
        className={style}
        placeholder={project}
        defaultValue={project}
      />}
      </div>
    </div>
  );
};
