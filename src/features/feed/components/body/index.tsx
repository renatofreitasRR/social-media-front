import { Main } from './main';
import { SideBar } from './sidebar';
import {
    Wrapper

} from './styles';

export function Body() {
    return (
        <Wrapper>
            <SideBar />
            <Main />
        </Wrapper>
    );
}