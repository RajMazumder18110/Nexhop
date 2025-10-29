"use client";
/** @notice Library imports */
import { X } from "lucide-react";
import { useActionState } from "react";
/// Local imports
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useParams } from "next/navigation";

type DeleteLinkButtonProps = {};

const DeleteLinkButton = (props: DeleteLinkButtonProps) => {
  const params = useParams();
  console.log("params.id", params.id);

  const [state, action, isPending] = useActionState(
    async () => {
      await new Promise((solve) => setTimeout(solve, 3000));
      return {
        data: 0,
      };
    },
    {
      data: 0,
    }
  );

  return (
    <DialogContent className="pb-10" showCloseButton={false}>
      <DialogClose className="absolute top-5 right-5">
        <div
          className={cn(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            "size-7 rounded-full border-foreground"
          )}
        >
          <X />
        </div>
      </DialogClose>
      <DialogHeader className="flex items-center">
        <DialogTitle className="font-medium text-xl md:text-3xl text-highlight"></DialogTitle>
        <DialogDescription>{"props.longUrl"}</DialogDescription>

        <form action={action}>
          <Button size={"sm"} variant={"destructive"} disabled={isPending}>
            {isPending && <Spinner />}
            Delete
          </Button>
        </form>
      </DialogHeader>
    </DialogContent>
  );
};

export default DeleteLinkButton;
