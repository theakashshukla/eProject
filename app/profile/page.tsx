import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
const ProfileCard = () => {
  return (
    <div>
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="font-semibold">
              theakashshukla/esence-web
            </CardTitle>
            <CardDescription className="font-semibold">
              E-Sence is a cloud-based college management system that provides a
              easy-to-use solution for managing all aspects of your Institution.
            </CardDescription>
          </div>

          <div className="flex items-center space-x-1 rounded-md text-secondary-foreground">
            <Icons.timer className="mr-2 h-4 w-4" />
            In Progress
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icons.circle className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              TypeScript
            </div>
            <div className="flex items-center">
              <Icons.star className="mr-1 h-3 w-3" />
              12
            </div>
            <div>Updated Nov 2023</div>
          </div>

          <Separator className="my-4" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Team</h4>
            <div className="grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/49320497?s=96&v=4" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Akash Shukla
                    </p>
                    {/* add link */}
                    <a href="https://twitter.com/theskaai">
                      <p className="text-sm text-muted-foreground ">
                        @theakashshukla
                      </p>
                    </a>
                  </div>
                </div>
                <a href="">
                  <Button variant="ghost">
                    Let&apos;s Connect
                    <Icons.arrowUpRight className="mt-1 ms-1 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-6 my-2">
            <Button variant="outline">
              <Icons.folderEdit className="mr-2 h-4 w-4" />
              Feature Request
            </Button>
            <Button variant="outline">
              <Icons.fork className="mr-2 h-4 w-4" />
              Fork Repository
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 my-2">
            <div>
              <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                <Icons.github className="mb-3 h-6 w-6" />
                Join Discord
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                <Icons.archive className="mb-3 h-6 w-6" />
                Documents
              </div>
            </div>
            <div>
              <a href="https://x.com/theskaai">
                <div className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                  <Icons.twitter className="mb-3 h-6 w-6" />
                  Build in Public
                </div>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
