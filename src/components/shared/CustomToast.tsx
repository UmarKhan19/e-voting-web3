import { toast } from "@/hooks/use-toast";

export const customToast = {
	success(title: string, description?: string) {
		return toast({
			title,
			description,
		});
	},
	error(title: string, description?: string) {
		return toast({
			title,
			description,
			variant: "destructive",
		});
	},
};
