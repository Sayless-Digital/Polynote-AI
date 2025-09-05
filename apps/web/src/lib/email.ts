import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailVerificationData {
  name: string;
  email: string;
  verificationUrl: string;
}

export interface WelcomeEmailData {
  name: string;
  email: string;
}

export async function sendVerificationEmail(data: EmailVerificationData) {
  try {
    const { name, email, verificationUrl } = data;
    
    const result = await resend.emails.send({
      from: 'PolyNote <noreply@polynote.ai>',
      to: [email],
      subject: 'Verify your PolyNote account',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify your PolyNote account</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .logo { width: 48px; height: 48px; margin: 0 auto 15px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">
              <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 287.50 812.27 C262.96,808.76 238.67,797.05 220.87,780.16 C208.38,768.31 202.34,760.29 195.52,746.50 C180.12,715.37 178.97,678.46 192.37,645.50 C194.16,641.10 203.07,624.67 212.17,609.00 C221.27,593.33 238.30,563.85 250.01,543.50 C261.72,523.15 276.80,497.05 283.51,485.50 C290.23,473.95 300.00,457.08 305.23,448.00 C310.46,438.92 328.81,407.20 346.01,377.50 C363.21,347.80 386.94,306.62 398.74,286.00 C410.55,265.38 421.96,246.21 424.10,243.42 C429.29,236.63 440.11,226.02 447.50,220.46 C455.45,214.47 471.17,206.62 481.32,203.55 C519.44,192.03 559.32,202.70 589.57,232.50 C594.59,237.45 600.50,244.20 602.70,247.50 C606.04,252.53 631.44,296.05 666.01,356.00 C670.29,363.42 680.30,380.75 688.24,394.50 C696.19,408.25 711.71,435.27 722.73,454.55 C733.75,473.82 746.94,496.77 752.03,505.55 C757.13,514.32 766.11,529.83 771.99,540.00 C777.87,550.17 792.76,575.83 805.08,597.00 C817.40,618.17 828.90,638.42 830.64,642.00 C843.36,668.19 845.93,701.20 837.34,728.00 C825.61,764.55 795.36,795.12 759.22,806.93 C739.52,813.37 754.54,813.01 511.50,812.85 C389.95,812.77 289.15,812.51 287.50,812.27 ZM 729.79 749.47 C758.12,743.84 777.21,721.37 777.36,693.50 C777.45,677.46 773.53,667.50 754.44,635.29 C732.75,598.70 706.78,555.51 705.87,554.54 C705.32,553.95 683.17,575.32 648.24,610.15 C587.41,670.80 586.36,671.71 570.49,677.49 C558.99,681.67 403.48,717.12 396.40,717.18 C385.55,717.26 376.85,711.94 372.38,702.50 C368.75,694.82 369.21,689.85 375.56,668.34 C382.02,646.49 384.49,638.10 400.96,582.00 C418.95,520.76 419.51,519.06 423.82,512.45 C426.40,508.48 454.18,480.27 507.22,427.76 L 586.75 349.03 L 571.75 323.76 C551.10,288.98 548.69,285.13 544.36,280.09 C536.59,271.05 521.75,264.00 510.50,264.00 C504.10,264.00 494.31,266.93 487.41,270.92 C476.79,277.05 475.54,279.00 412.25,388.50 C399.86,409.95 383.76,437.62 376.49,450.00 C369.22,462.38 359.24,479.48 354.31,488.00 C349.37,496.52 335.87,519.70 324.30,539.50 C312.73,559.30 298.87,583.15 293.49,592.50 C288.12,601.85 278.54,618.50 272.22,629.50 C252.19,664.32 248.31,673.61 247.34,689.00 C245.83,712.94 257.97,734.01 279.50,744.84 C292.11,751.18 278.82,750.83 510.79,750.92 C696.77,750.99 723.01,750.82 729.79,749.47 ZM 504.77 629.64 C524.73,625.47 542.95,621.56 545.27,620.94 C548.93,619.97 553.84,615.50 581.83,587.66 C599.61,569.97 627.59,541.76 643.99,524.96 L 673.83 494.42 L 663.04 475.96 C657.10,465.81 645.31,445.63 636.83,431.13 C628.35,416.63 621.04,404.77 620.59,404.77 C620.14,404.77 587.03,437.49 547.00,477.47 C498.18,526.24 473.71,551.37 472.64,553.83 C469.88,560.21 452.00,625.50 452.00,629.19 C452.00,631.30 452.87,633.84 454.16,635.47 C456.18,638.05 456.68,638.18 462.41,637.71 C465.76,637.44 484.82,633.80 504.77,629.64 Z" fill="white"/>
              </svg>
            </div>
            <h1>Welcome to PolyNote!</h1>
          </div>
          <div class="content">
            <h2>Hi ${name},</h2>
            <p>Thank you for signing up for PolyNote! To complete your account setup, please verify your email address by clicking the button below:</p>
            
            <div style="text-align: center;">
              <a href="${verificationUrl}" class="button">Verify Email Address</a>
            </div>
            
            <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
            <p style="word-break: break-all; background: #e9ecef; padding: 10px; border-radius: 4px; font-family: monospace;">${verificationUrl}</p>
            
            <p>This link will expire in 24 hours for security reasons.</p>
            
            <p>If you didn't create an account with PolyNote, you can safely ignore this email.</p>
          </div>
          <div class="footer">
            <p>Best regards,<br>The PolyNote Team</p>
            <p>This email was sent to ${email}</p>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Failed to send verification email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendWelcomeEmail(data: WelcomeEmailData) {
  try {
    const { name, email } = data;
    
    const result = await resend.emails.send({
      from: 'PolyNote <noreply@polynote.ai>',
      to: [email],
      subject: 'Welcome to PolyNote! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to PolyNote</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
            .logo { width: 48px; height: 48px; margin: 0 auto 15px; }
            .feature { background: white; padding: 20px; margin: 15px 0; border-radius: 6px; border-left: 4px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">
              <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 287.50 812.27 C262.96,808.76 238.67,797.05 220.87,780.16 C208.38,768.31 202.34,760.29 195.52,746.50 C180.12,715.37 178.97,678.46 192.37,645.50 C194.16,641.10 203.07,624.67 212.17,609.00 C221.27,593.33 238.30,563.85 250.01,543.50 C261.72,523.15 276.80,497.05 283.51,485.50 C290.23,473.95 300.00,457.08 305.23,448.00 C310.46,438.92 328.81,407.20 346.01,377.50 C363.21,347.80 386.94,306.62 398.74,286.00 C410.55,265.38 421.96,246.21 424.10,243.42 C429.29,236.63 440.11,226.02 447.50,220.46 C455.45,214.47 471.17,206.62 481.32,203.55 C519.44,192.03 559.32,202.70 589.57,232.50 C594.59,237.45 600.50,244.20 602.70,247.50 C606.04,252.53 631.44,296.05 666.01,356.00 C670.29,363.42 680.30,380.75 688.24,394.50 C696.19,408.25 711.71,435.27 722.73,454.55 C733.75,473.82 746.94,496.77 752.03,505.55 C757.13,514.32 766.11,529.83 771.99,540.00 C777.87,550.17 792.76,575.83 805.08,597.00 C817.40,618.17 828.90,638.42 830.64,642.00 C843.36,668.19 845.93,701.20 837.34,728.00 C825.61,764.55 795.36,795.12 759.22,806.93 C739.52,813.37 754.54,813.01 511.50,812.85 C389.95,812.77 289.15,812.51 287.50,812.27 ZM 729.79 749.47 C758.12,743.84 777.21,721.37 777.36,693.50 C777.45,677.46 773.53,667.50 754.44,635.29 C732.75,598.70 706.78,555.51 705.87,554.54 C705.32,553.95 683.17,575.32 648.24,610.15 C587.41,670.80 586.36,671.71 570.49,677.49 C558.99,681.67 403.48,717.12 396.40,717.18 C385.55,717.26 376.85,711.94 372.38,702.50 C368.75,694.82 369.21,689.85 375.56,668.34 C382.02,646.49 384.49,638.10 400.96,582.00 C418.95,520.76 419.51,519.06 423.82,512.45 C426.40,508.48 454.18,480.27 507.22,427.76 L 586.75 349.03 L 571.75 323.76 C551.10,288.98 548.69,285.13 544.36,280.09 C536.59,271.05 521.75,264.00 510.50,264.00 C504.10,264.00 494.31,266.93 487.41,270.92 C476.79,277.05 475.54,279.00 412.25,388.50 C399.86,409.95 383.76,437.62 376.49,450.00 C369.22,462.38 359.24,479.48 354.31,488.00 C349.37,496.52 335.87,519.70 324.30,539.50 C312.73,559.30 298.87,583.15 293.49,592.50 C288.12,601.85 278.54,618.50 272.22,629.50 C252.19,664.32 248.31,673.61 247.34,689.00 C245.83,712.94 257.97,734.01 279.50,744.84 C292.11,751.18 278.82,750.83 510.79,750.92 C696.77,750.99 723.01,750.82 729.79,749.47 ZM 504.77 629.64 C524.73,625.47 542.95,621.56 545.27,620.94 C548.93,619.97 553.84,615.50 581.83,587.66 C599.61,569.97 627.59,541.76 643.99,524.96 L 673.83 494.42 L 663.04 475.96 C657.10,465.81 645.31,445.63 636.83,431.13 C628.35,416.63 621.04,404.77 620.59,404.77 C620.14,404.77 587.03,437.49 547.00,477.47 C498.18,526.24 473.71,551.37 472.64,553.83 C469.88,560.21 452.00,625.50 452.00,629.19 C452.00,631.30 452.87,633.84 454.16,635.47 C456.18,638.05 456.68,638.18 462.41,637.71 C465.76,637.44 484.82,633.80 504.77,629.64 Z" fill="white"/>
              </svg>
            </div>
            <h1>🎉 Welcome to PolyNote!</h1>
          </div>
          <div class="content">
            <h2>Hi ${name},</h2>
            <p>Your email has been verified and your PolyNote account is now active! You're all set to start taking intelligent notes with AI assistance.</p>
            
            <h3>What you can do with PolyNote:</h3>
            
            <div class="feature">
              <strong>📝 Smart Note Taking</strong><br>
              Take notes with voice input and get AI-powered transcriptions and summaries.
            </div>
            
            <div class="feature">
              <strong>🤖 AI Chat Interface</strong><br>
              Chat with your notes and get intelligent insights from your content.
            </div>
            
            <div class="feature">
              <strong>📁 Organized Storage</strong><br>
              Your notes are automatically tagged and categorized for easy retrieval.
            </div>
            
            <div style="text-align: center;">
              <a href="${process.env.NEXTAUTH_URL || 'http://localhost:3000'}" class="button">Start Taking Notes</a>
            </div>
            
            <p>If you have any questions or need help getting started, feel free to reach out to our support team.</p>
          </div>
          <div class="footer">
            <p>Happy note-taking!<br>The PolyNote Team</p>
            <p>This email was sent to ${email}</p>
          </div>
        </body>
        </html>
      `,
    });

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

