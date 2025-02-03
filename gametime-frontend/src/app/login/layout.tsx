export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>
          <div className="login-container">
            {children}
          </div>
        </body>
      </html>
    );
  }