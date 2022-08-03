import { CommentForm } from './commentForm';
import { Content } from './content';
import { Header } from './header';
import {
    Container
} from './styles';

export function Post() {
    return (
        <Container>
            <Header />
            <Content />
            <CommentForm />
        </Container>
    );
}