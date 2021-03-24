import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`
const CategoryBlock = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: green;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: 22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`

const category_list = [
    {
        name: 'all',
        text: 'ALL'
    },
    {
        name: 'business',
        text: 'BUSINESS'
    },
    {
        name: 'entertainment',
        text: 'ENTERTAINMENT'
    },
    {
        name: 'health',
        text: 'HEALTH'
    },
    {
        name: 'science',
        text: 'SCIENCE'
    },
    {
        name: 'sports',
        text: 'SPORTS'
    },
    {
        name: 'technology',
        text: 'TECHNOLOGY'
    }
]


const Categories = ({category, onSelect}) => {
    return (
        <CategoriesBlock>
            {category_list.map(c => (
                <CategoryBlock 
                    key={c.name} 
                    activeClassName='active' exact={c.name === 'all'} 
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.name}
                    </CategoryBlock>
            ))}
        </CategoriesBlock>
    )
};

export default Categories;