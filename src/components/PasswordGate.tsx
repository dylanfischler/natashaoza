import { unlockFmGlobal } from "@/app/work/[slug]/actions";
import { Container } from "./Container";

type PasswordGateProps = {
  hasError: boolean;
};

export function PasswordGate({ hasError }: PasswordGateProps) {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <p className="font-mono text-kicker uppercase text-ink-soft">
              NDA · Locked
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            <h1 className="text-h1 font-semibold text-ink max-w-[20ch] sm:text-display-3">
              This case study is available on request.
            </h1>
            <p className="text-lead text-ink-soft max-w-[55ch]">
              The full write-up is gated under a non-disclosure agreement with
              FM Global. If you&rsquo;ve been given a passcode, enter it below
              to read the work.
            </p>

            <form
              action={unlockFmGlobal}
              className="flex flex-col gap-3 max-w-[420px]"
            >
              <label
                htmlFor="fm-password"
                className="font-mono text-kicker uppercase text-ink-soft"
              >
                Passcode
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="fm-password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  required
                  aria-invalid={hasError}
                  aria-describedby={hasError ? "fm-password-error" : undefined}
                  className="flex-1 border border-hairline bg-surface px-4 py-3 font-mono text-body text-ink focus:outline-none focus:border-terracotta"
                />
                <button
                  type="submit"
                  className="bg-ink text-surface px-6 py-3 font-mono text-kicker uppercase tracking-wider hover:bg-terracotta transition-colors"
                >
                  Unlock
                </button>
              </div>
              {hasError && (
                <p
                  id="fm-password-error"
                  className="font-mono text-small text-ink border-l-2 border-terracotta pl-3"
                >
                  That passcode didn&rsquo;t match. Try again, or email{" "}
                  <a
                    href="mailto:natasha.oza96@gmail.com"
                    className="underline hover:text-terracotta"
                  >
                    natasha.oza96@gmail.com
                  </a>
                  .
                </p>
              )}
            </form>

            <p className="text-small text-ink-soft max-w-[55ch]">
              Don&rsquo;t have a passcode?{" "}
              <a
                href="mailto:natasha.oza96@gmail.com?subject=FM%20Global%20case%20study%20access"
                className="text-terracotta underline underline-offset-4 hover:decoration-2 transition-all"
              >
                Email me
              </a>{" "}
              and I&rsquo;ll send you one.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
