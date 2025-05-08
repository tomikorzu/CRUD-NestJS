"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Asterisk, Plus } from "lucide-react";

export default function CreateProjectButton() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">
            <p>Create Project</p>
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Create a new project for your team
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <Label
              htmlFor="name"
              className="text-right flex items-center gap-1"
            >
              <p>Name</p>
              <Asterisk className="size-4 opacity-60" />
            </Label>
            <Input id="name" value="Vercel" />
            <Label htmlFor="description" className="text-right mt-2">
              Description
            </Label>
            <Input
              id="description"
              value="Best place to build your next project"
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled className="mt-2">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
