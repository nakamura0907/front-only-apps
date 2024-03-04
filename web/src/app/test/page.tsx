"use client"

import { FormProvider, useForm, useFormContext } from "@repo/ui";

type Schema = {
    text: string;
}

export default function Page() {
    const methods = useForm<Schema>({
        defaultValues: {
            text: "hello",
        },
    })
    const watch = methods.watch();
    console.log(watch);

    return(
        <>
        <FormProvider {...methods}>
            <form>
                <Input />
            </form>
        </FormProvider>
        </>
    );
}

const Input = () => {
    const { register } = useFormContext<Schema>();
    return <input {...register("text")} />;
}