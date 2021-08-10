import Link from 'next/link'

const HeroCategoriesItem = ({ href='#', departmentName= 'Fresh Meat' }) => {

    return (
        <li>
            <Link href={href}>{departmentName}</Link>
        </li>
    );
};
export default HeroCategoriesItem;