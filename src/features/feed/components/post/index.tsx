import { Comment } from './comment';
import { CommentForm } from './commentForm';
import { Content } from './content';
import { Header } from './header';
import {
    Container,
    CommentList
} from './styles';

export function Post() {
    return (
        <Container>
            <Header />
            <Content />
            <CommentForm />
            <CommentList>
                <Comment />
                <Comment />
            </CommentList>
        </Container>
    );
}