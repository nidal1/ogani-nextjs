export default function handler(req, res) {
    const categories = ['vegitable', 'fruits', 'meats', 'jucices', 'dried-fruits','fast-food']
    res
        .status(200)
        .json(categories)
}