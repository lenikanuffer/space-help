import './Tips.css';

function Tips () {
    return (
        <main className='default-container m-4 flex flex-col items-center'>
        <h1 className='text-center'>Welcome to Space Help decluttering challenge!</h1> 
       <ul className='w-4/5 flex flex-col gap-2 m-4'>
        <li> If you are here, you probably struggle mantaining an organised space. You are not alone!</li>
        <li> Decluttering doesn't need to be overwhelming. You can do it step by step, while building patience and letting go of perfection. </li>
        <li> Our main advice: Divide and conquer!</li>
        <li> Select a space you want to declutter at the time. You don't need to empty your whole closet at once!. Choose one drawer, work on it, and keep energy and motivation for other days.</li>
        <li> Feeling wild and entusiastic? You can start with larger challenges, keeping smaller onces for days of less motivation, or spaces that are difficult to declutter.</li>
        <li> Insecure about the numbers? you can select a space, declutter, and select a challenge after counting the items you decided to eliminate.</li>
        <li> Let go of perfection: If you can't complete a challenge, you can do it later. If you eliminated more items than required, you can add them in another challenge. This app is meant to support your decluttering adventure, but you make your own rules!</li>
        <li> Have fun!</li>
       </ul>

       <p className='footnote'>Note: Space Help was inspired in <a href='https://www.theminimalists.com/game/' className='link'>'The 30 days minimalism game'</a>, referenced in <a href='https://www.youtube.com/watch?v=L4AgMDvunO4'className='link'> this video</a>.</p>
    </main>
    )
}

export default Tips