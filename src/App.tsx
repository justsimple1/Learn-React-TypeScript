import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
const App = () => {

    return (
        <BrowserRouter>
            <div>
                <NavLink to="/users">Пользователи</NavLink>
                <NavLink to="/todos">Список дел</NavLink>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
                <Route path={'/todos/:id'}>
                    <TodoItemPage/>
                </Route>
            </div>
        </BrowserRouter>
    );
};

export default App;