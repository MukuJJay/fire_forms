import { Eye } from "lucide-react";
import {
  Card as CardWrapper,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface CardProps {
  title: string;
  helperText: string;
  value: string;
  icon: "visits" | "submissions" | "submissionRate" | "bounceRate";
  loading?: boolean;
}

const IconMap = {
  visits: <Eye className="w-6 h-6 text-primary" />,
  submissions: <Eye className="w-6 h-6 text-primary" />,
  submissionRate: <Eye className="w-6 h-6 text-primary" />,
  bounceRate: <Eye className="w-6 h-6 text-primary" />,
};

function Card({ title, helperText, value, icon, loading }: CardProps) {
  return (
    <CardWrapper className="shadow-primary shadow-sm">
      <CardHeader className="pb-1">
        <CardTitle className="flex items-center justify-between text-xl text-slate-500">
          {title} {IconMap[icon]}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="rounded-full">
            <span className="opacity-0 text-2xl">0</span>
          </Skeleton>
        ) : (
          <span className="text-[25px]">{value}</span>
        )}
        <p className="text-primary mt-1">{helperText}</p>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;
