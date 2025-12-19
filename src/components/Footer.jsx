export default function Footer() {
    const date = new Date();
    return (
        <footer className='p-3'>
            <div className='flex items-center justify-center'>
                <p>&copy; {date.getFullYear()} | conçu avec ❤ par Youssef Bouzizoua</p>
            </div>
        </footer>
    )
}
