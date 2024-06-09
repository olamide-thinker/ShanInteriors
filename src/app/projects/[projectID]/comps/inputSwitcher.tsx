import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import { TfiCheck, TfiTrash } from "react-icons/tfi";

export const InputSwitcher = ({
  name,
  placeHolder = "Placeholder",
  multiLine,
  className,
}: {
  name: string;
  placeHolder: string;
  className: string;
  multiLine?: boolean;
}) => {
  const [editable, setEditable] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  
   if( !multiLine) {
   return <div>
        {editable ? (
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 h-full justify-center"
            >
              <Input
                className={className}
                type="text"
                placeholder={placeHolder}
                {...register("title", { required: true, maxLength: 80 })}
              />

              <div className="flex gap-2 ">
                <Button className=" h-8" size={"sm"} type="submit">
                  {" "}
                  <TfiCheck />{" "}
                </Button>
                <Button
                  className=" h-8"
                  size={"sm"}
                  variant={"destructive"}
                  onClick={() => {
                    setEditable(false);
                  }}
                  type="submit"
                >
                  {" "}
                  <TfiTrash />{" "}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <p onDoubleClick={() => setEditable(true)} className={className}>
            Project Handsome
          </p>
        )}
      </div>
    } else {
     return <div>
        {editable ? (
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2 h-full justify-center "
            >
              <Textarea
                id="description"
                className={className}
                placeholder="describe this project"
                {...register("description", { required: true, maxLength: 100 })}
              />

              <div className="flex gap-2 ">
                <Button className=" h-8" size={"sm"} type="submit">
                  {" "}
                  <TfiCheck />{" "}
                </Button>
                <Button
                  className=" h-8"
                  size={"sm"}
                  variant={"destructive"}
                  onClick={() => {
                    setEditable(false);
                  }}
                  type="submit"
                >
                  {" "}
                  <TfiTrash />{" "}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <p onDoubleClick={() => setEditable(true)} className={className}>
            Lorem ipsum dolor 
          </p>
        )}
      </div>
    };
  
};
