import { Post } from '../../post';
import {
    Container
} from './styles';

export function Main() {
    return (
        <Container>
            <Post />
            <Post />
            <Post />
        </Container>
    );
}