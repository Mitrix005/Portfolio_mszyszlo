"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const description = formData.get('description');

    if (!name || !email || !description) {
        return { error: 'Please fill any required fields.' };
    }

    try {
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'michalszyszlo05@gmail.com',
            subject: `Nowe zapytanie od: ${name}`,
            replyTo: email,
            text: `Imię: ${name}\nEmail: ${email}\n\nOpis zlecenia:\n${description}`
        });

        return { success: true, data };
    } catch (error) {
        return { error: 'Błąd wysyłania wiadomości' };
    }
}