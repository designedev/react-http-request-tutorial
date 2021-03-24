import styled from "styled-components";

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
const CategoryBlock = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: green;
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


const Categories = () => {
    return (
        <CategoriesBlock>
            {category_list.map(category => (
                <CategoryBlock key={category.name}>{category.name}</CategoryBlock>
            ))}
        </CategoriesBlock>
    )
};

export default Categories;