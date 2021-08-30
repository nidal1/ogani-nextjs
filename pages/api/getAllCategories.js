export default function handler(req, res) {
    const categories = ['Vegitable', 'Fruits', 'Meats', 'Jucices', 'Dried Fruits','Fast Food']
    res
        .status(200)
        .json({ data: {
            categories
        } })
}