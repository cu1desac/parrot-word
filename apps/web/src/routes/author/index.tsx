import { createFileRoute } from '@tanstack/react-router';

function Test() {
	return (
		<div className="">
			<span className=" bg-black text-red-400">hello /author/!11</span>
		</div>
	);
}
export const Route = createFileRoute('/author/')({
	component: Test,
});
