import { useRef, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const SectionContact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_4md18ok', 'template_3hvqvjb', form.current, {
                publicKey: 'GXH4OVvKwyd78WToD',
            })
            .then(
                (response: EmailJSResponseStatus) => {
                    console.log('SUCCESS!', response.status, response.text="Mensaje enviado");
                    alert("Mensaje enviado ")
                },
                (error) => {
                    console.error('FAILED...', error);
                }
            );
            
    };

    return (
        <section className="max-w-3xl w-full mt-12 space-y-8" id="sendmessage">
            <h2 className="text-2xl font-bold tracking-tight text-gray-100">Contactame</h2>
            <form className="bg-gray-800 dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4" ref={form} onSubmit={sendEmail}>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        htmlFor="name"
                    >
                        Nombre
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        placeholder="Tu nombre"
                        type="text"
                        name="user_name"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        htmlFor="email"
                    >
                        Correo
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="email"
                        placeholder="correo electronico"
                        type="email"
                        name="user_email"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                        htmlFor="message"
                    >
                        Mensaje
                    </label>
                    <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="message"
                        name="message"
                        placeholder="Deja tu mensaje"
                    ></textarea>
                </div>
                <button
                    className="inline-flex items-center justify-center  rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground h-10 px-4 py-2 w-full text-white bg-indigo-500 hover:bg-indigo-800"
                    type="submit"
                >
                    Enviar Mensaje
                </button>
            </form>
        </section>
    );
};

export default SectionContact;
