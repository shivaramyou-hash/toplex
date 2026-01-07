import { NextResponse } from 'next/server';

export async function POST(request) {
  // In a real application, you would send an email here using a service like Resend, SendGrid, or nodemailer.
  // For this migration, we are simply simulating a successful submission to match the legacy behavior.
  
  // You can access the form data like this:
  // const formData = await request.formData();
  // const fname = formData.get('fname');
  // const lname = formData.get('lname');
  // const email = formData.get('email');
  // const phone = formData.get('phone');
  // const message = formData.get('message');

  // Return "success" text as expected by the legacy function.js script
  return new NextResponse('success', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
