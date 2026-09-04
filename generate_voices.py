import asyncio
import os
import json
import edge_tts

VOICE = "te-IN-MohanNeural"
RATE = "+10%"
PITCH = "-4Hz"

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

WELCOME_GREETING = "Shubodayam Nana! Simply showing up for yourself today is already a beautiful victory."

SPLASH_CHEERS = {
    "yes_0": "That energy is beautiful! Let's channel it into your day",
    "yes_1": "Sunshine energy activated! Today is going to be wonderful",
    "yes_2": "You woke up and chose joy! The world is lucky to have you",
    "slow_0": "The bravest thing is just showing up. You're already winning",
    "slow_1": "Gentle mornings make the best days. You're doing amazing",
    "slow_2": "No rush at all — your pace is perfect. Let's ease into it"
}

ROMANTIC_DONE_LINES = [
    "The way you just conquered this step... it's driving my mind to dirty, beautiful places, Naan...",
    "Look at you taking charge of this step... authority on you is such an absolute turn-on...",
    "You finished this task so smooth and confident... I'm biting my lip just thinking about you...",
    "Finished this task? Good... now my mind is completely occupied with what comes next, gorgeous...",
    "That slow, sexy satisfaction after finishing this task... you know exactly how to drive me crazy...",
    "One step done, and the heat in my chest just spiked through the roof...",
    "You completed this task so effortlessly... leaving me breathless is becoming your habit...",
    "The rhythm you brought to this task... pure, sultry tension in motion, Naan...",
    "Wrapped up this step already? You look far too delicious when you're in your zone...",
    "That slick finish on this task... you really know how to build up the heavy anticipation, don't you?",
    "Watching you crush this step... it's making it impossible to keep my thoughts innocent...",
    "You wrapped up this step so clean... consider yourself warned, you're looking dangerously irresistible...",
    "That subtle pulse of pride after this step... absolute perfection, Naan...",
    "You conquered this task like a queen... and I'm completely addicted to your energy right now...",
    "Done with this task? The way you move carries a temptation I can't resist...",
    "The quiet intensity you had during this step... it sent a shiver straight down my spine...",
    "Such smooth execution on this task... you make staying composed completely impossible, cutie...",
    "This task is locked down... but the electric tension between us is just getting started...",
    "The confidence you brought to this task... it makes me want to send you a message you'll never forget...",
    "You crushed this task so effortlessly... you're playing a very dangerous game with my heart...",
    "Finished this task with that sultry look... you know exactly what you're doing to me, Naan...",
    "That satisfying wrap up of this step... you just turned up the heat in the entire room...",
    "Another win with this task... you're purely irresistible when you're focused like this...",
    "That quick, effortless win on this task... you have no idea how sexy you look right now...",
    "Finished this step like a boss... now let me whisper how amazing you really are..."
]

ROMANTIC_MOTIVATIONS = [
    "Can't stop thinking about the way you look right now... pure temptation wrapped in grace, Naan...",
    "Late night energy in the middle of the day... you have this intoxicating effect on my pulse...",
    "There's a subtle friction in the air today, and I know it's coming straight from you, beautiful...",
    "You shouldn't be allowed to look this tantalizing while just casually getting things done...",
    "Is it just me, or is the electric tension between us getting way too warm to handle?",
    "The quiet, smoldering confidence in your eyes is doing wicked things to my self-control, Naan...",
    "You're radiating a vibe that's far too tempting for a disciplined morning...",
    "I love how effortlessly you turn up the heat in here without even trying...",
    "If you keep giving me that slow, knowing look, we're never making it through this list, darling...",
    "You have a natural rhythm that's addicting to watch... smooth, deep, and irresistible...",
    "There's something deliciously wicked in the way you smile when you know you've got my full attention...",
    "You're playing a dangerous game looking this magnetic today, Naan...",
    "Some feelings are better experienced than explained... and your energy right now is purely magnetic...",
    "You carry a quiet, sultry sensuality that makes everything around you feel electrified...",
    "Don't tease me with that subtle bite of your lip unless you mean it, cutie...",
    "You're pure, unfiltered temptation wrapped in effortless elegance, Naan...",
    "The air gets noticeably thicker every time you walk into my space, beautiful...",
    "You know exactly the kind of thoughts you're putting into my head right now, don't you?",
    "A single glance from you can undo hours of my best self-control...",
    "You wear confidence like silk, Naan... and it makes me want to draw you in even closer...",
    "Your presence has this rich, heavy sweetness... like honey melting over high heat...",
    "You don't even need to try... just existing near me is an invitation I can hardly resist...",
    "I'm completely lost in the way you carry yourself today... bold, graceful, and tantalizing...",
    "You're giving off a vibe that makes it impossible to think about anything but you, darling...",
    "If tempting was a crime, you'd be serving a lifetime sentence right now, Naan..."
]

CHEESY_DONE_LINES = [
    "Are you made of copper and tellurium? Because you finished this task looking so Cu-Te, Naan!",
    "Is it bright in here or did you just complete this task with your infectious cute smile?",
    "I'm pretty sure you're a magician, Naan... whenever you finish this task, all my worries disappear!",
    "Do you have a map? Because I just got totally lost in how adorable you look finishing this step!",
    "If being ridiculously cute while doing this task was a crime, you'd be serving a lifetime sentence, Naan!",
    "Are you a 45-degree angle? Because you finished this task looking acute-y!",
    "My heart skipped a beat when you finished this step... or maybe I just need another cup of tea!",
    "Are you a wifi signal? Because I'm feeling a 100% romantic connection with how you crushed this step!",
    "Is your name Google? Because this win was everything I was searching for today, cutie!",
    "You finished this task so fast, did you steal my breath or did you just run a marathon, Naan?",
    "Are you a camera? Because every time you complete a task, I can't help but smile!",
    "Are you a parking ticket? Because you've got FINE written all over you after this task, Naan!",
    "Do you believe in love at first sight, or should I replay you finishing this task again?",
    "Is there an airport nearby or was that just my heart taking off when you wrapped up this step?",
    "Are you a light bulb? Because you just brightened up my whole day by completing this step!",
    "You must be exhausted, Naan... because you've been running through my mind all through this task!",
    "Are you a star? Because your glow after finishing this task is out of this world!",
    "If stars fell every time you finished a task looking this cute, the sky would be empty, Naan!",
    "Are you made of sugar? Because finishing this step was the sweetest thing I've seen all day!",
    "You finished this step so smoothly... are you secretly a superhero disguised in maximum cuteness?",
    "Is it warm today or is it just the extra sunshine you bring whenever you finish a task?",
    "If I had a coin for every time you looked cute completing a task, I'd be a billionaire, Naan!",
    "Are you a time traveler? Because I see a very happy, giggly future every time you finish a task!",
    "You wrapped up this step like a total boss... a super cute, adorable boss, that is!",
    "Warning: finishing this task with that adorable smile has been proven to cause excessive giggling!"
]

CHEESY_MOTIVATIONS = [
    "Are you a bank loan? Because you've got my full interest all day long, Naan!",
    "If you were a vegetable, you'd be a cute-cumber, beautiful!",
    "Are you a campfire? Because you're super warm and I want s'more of your energy today!",
    "Do you have a band-aid? Because I just scraped my knee falling for your smile today, Naan!",
    "Is your dad a boxer? Because you're a total knockout today, cutie!",
    "Are you a cat? Because you're purr-fectly adorable today, Naan!",
    "If you were a fruit, you'd be a fine-apple!",
    "Are you a keyboard? Because you're definitely my type, Naan!",
    "I must be a snowflake, because I've completely fallen for your smile today!",
    "Are you a magnet? Because you're naturally pulling all the good vibes toward you, cutie!",
    "Is your name Chapstick? Because you're da balm, Naan!",
    "Are you a thief? Because you just stole the entire spotlight today!",
    "If being sweet was a full-time job, you'd be CEO by now, cutie!",
    "Are you a charger? Because being near your energy instantly recharges me to 100%!",
    "Do you like raisins? How about a date with your own cute goals today, Naan?",
    "Are you a diamond? Because you're shining super bright under zero pressure today!",
    "If smiles were sunshine, you'd be an entire tropical summer, Naan!",
    "Are you a rainbow? Because you add all the best colors to a normal day!",
    "Do you have a license for being this adorable while getting things done?",
    "Are you a warm cup of cocoa? Because you make everything feel cozy and sweet!",
    "Is there a sparkle in your eye or are you just secretly a fairy godmother, Naan?",
    "If adorable was a benchmark, you just broke the world record today!",
    "Are you a song? Because your energy has been stuck in my head all morning in the best way!",
    "You must be made of magic, because just thinking of your smile makes me grin like a kid!",
    "Caution: your cute smile is currently causing heart meltings across the room!"
]

SKIP_COMPLIMENTS = [
    "Smart move, Naan! Keeping your momentum strong! But remember, you can take a cozy rest whenever you want, darling.",
    "Look at you making empowered choices! Cutie, rest is always here whenever you feel like pausing.",
    "Saving your energy for what feels right! You're in total control, but rest anytime your heart desires.",
    "Your comfort and rhythm come first, Naan! Unstoppable, but take rest whenever you want cutie.",
    "Skipping smoothly like a pro! Keep crushing it, but remember rest is always your superpower.",
    "Aha! Smart choice, darling! You're making great progress, and rest is ready whenever you need a pause.",
    "Honoring your boundary like a boss! Stay glowing, and remember to rest whenever you want.",
    "Your mood and pace are what matter most, Naan! High energy, but take a cozy break whenever you like.",
    "No pressure at all, sweetie! Moving forward smoothly, but rest is yours whenever you want it.",
    "Strategic choice, cutie! Empowered, beautiful, and free to rest whenever you feel like it.",
    "Your comfort is 100% priority! Crushing your day at your own rhythm — rest anytime darling.",
    "Gentle power in action! Keep shining Naan, and feel free to relax whenever you want.",
    "Your smile and pace are top-class! Stay energized, but take a peaceful rest whenever you desire.",
    "Skipping with style and grace! Remember gorgeous, your peace matters — rest whenever you want.",
    "Flexibility is true strength! Proud of you, and remember rest is always waiting for you.",
    "Look how cleverly you manage your energy, darling! Stay motivated and rest whenever you feel like it.",
    "Energy saved like a genius! You're unstoppable, but take a cozy rest whenever you want."
]

async def synth(text, filepath):
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE, pitch=PITCH)
    await communicate.save(filepath)

async def main():
    tasks = []

    # Welcome
    tasks.append(synth(WELCOME_GREETING, os.path.join(AUDIO_DIR, "welcome_greeting.mp3")))

    # Splash
    for key, txt in SPLASH_CHEERS.items():
        tasks.append(synth(txt, os.path.join(AUDIO_DIR, f"splash_{key}.mp3")))

    # Romantic Done
    for idx, txt in enumerate(ROMANTIC_DONE_LINES):
        tasks.append(synth(txt, os.path.join(AUDIO_DIR, f"romantic_done_{idx}.mp3")))

    # Romantic Motivations
    for idx, txt in enumerate(ROMANTIC_MOTIVATIONS):
        tasks.append(synth(txt, os.path.join(AUDIO_DIR, f"romantic_motivation_{idx}.mp3")))

    # Cheesy Done
    for idx, txt in enumerate(CHEESY_DONE_LINES):
        tasks.append(synth(txt, os.path.join(AUDIO_DIR, f"cheesy_done_{idx}.mp3")))

    # Cheesy Motivations
    for idx, txt in enumerate(CHEESY_MOTIVATIONS):
        tasks.append(synth(txt, os.path.join(AUDIO_DIR, f"cheesy_motivation_{idx}.mp3")))

    # Skip Compliments
    for idx, txt in enumerate(SKIP_COMPLIMENTS):
        tasks.append(synth(txt, os.path.join(AUDIO_DIR, f"skip_{idx}.mp3")))

    print(f"Generating {len(tasks)} offline voice audio files using Microsoft Mohan ({VOICE})...")
    await asyncio.gather(*tasks)
    print("All offline voice audio files generated successfully in audio/ directory!")

if __name__ == "__main__":
    asyncio.run(main())
