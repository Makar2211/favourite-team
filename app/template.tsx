import { ReduxProvider } from '@/store/provider';


export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<>
			<ReduxProvider>{children}</ReduxProvider>
		</>
	)
}