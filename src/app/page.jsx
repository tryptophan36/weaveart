import { InputForm } from "@/components/input-form";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `Home- ${siteConfig.name}`,
};

export default function IndexPage() {
  return (
    <div className="flex">
      <section className="container grid items-center gap-6 py-8 md:py-10 w-full">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Unleash, Appreciate, Create.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">Upload your asset to show it to the world (supports image, audio, video).</p>
        </div>
        <InputForm />
      </section>
    </div>
  );
}
