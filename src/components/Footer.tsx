export function Footer({ text }: { text: string }) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-8 font-mono text-xs text-muted">
        © {new Date().getFullYear()} Marco Rossel · {text}
      </div>
    </footer>
  );
}