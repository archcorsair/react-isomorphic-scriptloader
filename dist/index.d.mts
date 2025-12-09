import { ReactNode } from 'react';

interface Props {
    src: string;
    onLoad: () => void;
}
declare function ScriptLoader({ src, onLoad }: Props): ReactNode;

export { ScriptLoader as default };
