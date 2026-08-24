/* ================================================
   PREMIUM RAKSHA BANDHAN WEBSITE — JAVASCRIPT
   Personal, Cinematic, Interactive, Funny
   UPGRADED VERSION — Ripple, Stepper, Enhanced UX
================================================ */

// ================================================
// PAGE LOAD INIT
// ================================================

window.addEventListener('DOMContentLoaded', function () {
    console.log('🎀 DOM Content Loaded!');
    setTimeout(() => document.body.classList.add('loaded'), 100);
    addRippleEffectsToAllButtons();
});

console.log('🎀 Raksha Bandhan Website — Premium Edition Loaded!');

// ================================================
// RIPPLE EFFECT — Applied to all buttons
// ================================================

function addRippleEffectsToAllButtons() {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width  = ripple.style.height = size + 'px';
            ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    });
}

// ================================================
// CHAPTER PROGRESS STEPPER
// ================================================

const stepDots = document.querySelectorAll('.step-dot');

// chapterIndex: 1 = story, 2 = memories, 3 = funny, 4 = rakhi, 5 = letter, 6 = gift, 7 = final
function setActiveDot(chapterIndex) {
    stepDots.forEach((dot, i) => {
        dot.classList.remove('active', 'done');
        const dotChapter = i + 1;
        if (dotChapter < chapterIndex)  dot.classList.add('done');
        if (dotChapter === chapterIndex) dot.classList.add('active');
    });
}

// ================================================
// INTERACTIVE OPENING POPUP
// ================================================

const btnOpenWindow  = document.getElementById('btnOpenWindow');
const popupWindow    = document.getElementById('popupWindow');
const popupInitial   = document.getElementById('popupInitial');
const popupRevealed  = document.getElementById('popupRevealed');
const dialogue1      = document.getElementById('dialogue1');
const dialogue2      = document.getElementById('dialogue2');
const dialogue3      = document.getElementById('dialogue3');
const btnStartStory  = document.getElementById('btnStartStory');

if (btnOpenWindow && popupWindow) {
    btnOpenWindow.addEventListener('click', function () {
        console.log('🎉 Opening window...');
        popupWindow.classList.add('opening');

        setTimeout(() => {
            popupInitial.classList.add('hidden');
            popupRevealed.classList.remove('hidden');
            popupWindow.classList.remove('opening');
            popupWindow.classList.add('opened');
            startDialogueSequence();
        }, 600);
    });
}

// ================================================
// DIALOGUE SEQUENCE
// ================================================

function startDialogueSequence() {
    console.log('🐵 Starting dialogue sequence...');

    setTimeout(() => dialogue1.classList.remove('hidden'), 800);
    setTimeout(() => dialogue2.classList.remove('hidden'), 2800);
    setTimeout(() => dialogue3.classList.remove('hidden'), 4600);
    setTimeout(() => {
        btnStartStory.classList.remove('hidden');
        addRippleEffectsToAllButtons(); // ensure new button gets ripple
    }, 6200);
}

// ================================================
// TRANSITION TO MAIN WEBSITE
// ================================================

const openingScreen = document.getElementById('openingScreen');
const mainWebsite   = document.getElementById('mainWebsite');

if (btnStartStory && openingScreen && mainWebsite) {
    btnStartStory.addEventListener('click', function () {
        console.log('💖 Starting our story...');

        openingScreen.classList.add('fade-out');

        setTimeout(() => {
            openingScreen.style.display = 'none';
            mainWebsite.classList.remove('hidden');

            setTimeout(() => {
                mainWebsite.classList.add('visible');
                createParticles();
                initScrollAnimations();
                setActiveDot(1); // Chapter 1: Our Story
            }, 50);
        }, 900);
    });
}

// ================================================
// FLOATING PARTICLES BACKGROUND
// ================================================

function createParticles() {
    const particleContainer = document.getElementById('particleContainer');
    if (!particleContainer) return;

    const particles = ['✨', '🌸', '🪷', '💖', '🎀', '⭐', '💫'];
    const count = 18;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.textContent = particles[Math.floor(Math.random() * particles.length)];
        p.style.left              = Math.random() * 100 + 'vw';
        p.style.top               = Math.random() * 100 + 'vh';
        p.style.animationDelay    = Math.random() * 6 + 's';
        p.style.animationDuration = (10 + Math.random() * 10) + 's';
        particleContainer.appendChild(p);
    }

    console.log('✨ Floating particles created!');
}

// ================================================
// UTILITY FUNCTIONS
// ================================================

// Confetti animation (reusable)
function createConfetti() {
    const symbols = ['❤️', '💗', '✨', '🌸', '🎉', '🎀', '💖'];
    for (let i = 0; i < 50; i++) {
        const c = document.createElement('div');
        c.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        c.style.cssText = `position:fixed;left:${Math.random()*100}vw;top:-50px;font-size:${Math.random()*20+15}px;z-index:9999;pointer-events:none;`;
        document.body.appendChild(c);

        const anim = c.animate(
            [
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(110vh) rotate(${Math.random()*720}deg)`, opacity: 0 }
            ],
            { duration: Math.random() * 2000 + 2500, easing: 'ease-out' }
        );
        anim.onfinish = () => c.remove();
    }
}

// Sparkle on element
function addSparkle(element) {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    Object.assign(sparkle.style, {
        position: 'absolute',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        fontSize: '20px',
        pointerEvents: 'none',
        animation: 'sparkleFloat 1s ease-out forwards'
    });
    element.style.position = 'relative';
    element.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

// Inline keyframe for sparkle
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleFloat {
        0%   { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-35px) scale(0); }
    }
`;
document.head.appendChild(sparkleStyle);

// ================================================
// SCROLL-BASED REVEAL ANIMATIONS
// ================================================

function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach(el => observer.observe(el));
    console.log(`📜 Watching ${elements.length} elements for scroll animation`);
}

// ================================================
// PAGE NAVIGATION HELPER
// ================================================

function navigateTo(fromPage, toPage, chapterIndex, onArrival) {
    fromPage.classList.remove('active');

    setTimeout(() => {
        fromPage.classList.add('hidden');
        toPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            toPage.classList.add('active');
            setActiveDot(chapterIndex);
            if (onArrival) onArrival();
        }, 60);
    }, 520);
}

// ================================================
// PAGE NAVIGATIONS
// ================================================

const pageOurStory      = document.getElementById('pageOurStory');
const pageMemories      = document.getElementById('pageMemories');
const pageFunny         = document.getElementById('pageFunny');
const pageRakhi         = document.getElementById('pageRakhi');
const pageFinalSurprise = document.getElementById('pageFinalSurprise');
const pageFinalMessage  = document.getElementById('pageFinalMessage');

const btnMemories    = document.getElementById('btnMemories');
const btnFunny       = document.getElementById('btnFunny');
const btnRakhi       = document.getElementById('btnRakhi');
const btnContinue    = document.getElementById('btnContinue');
const btnFinalMessage= document.getElementById('btnFinalMessage');

// Our Story → Memories
if (btnMemories && pageOurStory && pageMemories) {
    btnMemories.addEventListener('click', () => {
        console.log('📸 → Memories');
        navigateTo(pageOurStory, pageMemories, 2);
    });
}

// Memories → Funny
if (btnFunny && pageMemories && pageFunny) {
    btnFunny.addEventListener('click', () => {
        console.log('😂 → Funny Things');
        navigateTo(pageMemories, pageFunny, 3);
    });
}

// Funny → Rakhi
if (btnRakhi && pageFunny && pageRakhi) {
    btnRakhi.addEventListener('click', () => {
        console.log('🧵 → Rakhi Page');
        navigateTo(pageFunny, pageRakhi, 4, initRakhiDragDrop);
    });
}

// Rakhi → Gift (Skip Letter)
if (btnContinue && pageRakhi && pageFinalSurprise) {
    btnContinue.addEventListener('click', () => {
        console.log('🎁 → Gift Page (Letter Skipped)');
        navigateTo(pageRakhi, pageFinalSurprise, 5, initGiftBoxOpening);
    });
}

// Gift → Final Message
if (btnFinalMessage && pageFinalSurprise && pageFinalMessage) {
    btnFinalMessage.addEventListener('click', () => {
        console.log('❤️ → Final Message');
        navigateTo(pageFinalSurprise, pageFinalMessage, 7, () => {
            createFinalParticles();
            createFinalCelebration();
        });
    });
}

// ================================================
// INTERACTIVE RAKHI — DRAG & DROP
// ================================================

// ================================================
// INTERACTIVE RAKHI — DRAG & DROP + TAP TO TIE
// ================================================

// Synthesized Festive Chime Sound via Web Audio API
function playRakhiChime(isMajor = false) {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        if (ctx.state === 'suspended') ctx.resume();

        const notes = isMajor ? [523.25, 659.25, 783.99, 1046.50, 1318.51] : [659.25, 830.61, 987.77, 1318.51];
        notes.forEach((freq, i) => {
            const osc  = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

            gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.08);
            gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + i * 0.08 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.08 + 0.6);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + i * 0.08);
            osc.stop(ctx.currentTime + i * 0.08 + 0.65);
        });
    } catch (e) {
        // AudioContext silent fallback
    }
}

function initRakhiDragDrop() {
    const draggableRakhi   = document.getElementById('draggableRakhi');
    const dropZone         = document.getElementById('dropZone');
    const wristBand        = document.getElementById('wristBand');
    const wristContainer   = document.getElementById('wristContainer');
    const rakhiInstruction = document.getElementById('rakhiInstruction');
    const btnTieRakhi      = document.getElementById('btnTieRakhi');
    const rakhiSuccess     = document.getElementById('rakhiSuccess');
    const sacredTilak      = document.getElementById('sacredTilak');
    const rakhiTapHint     = document.getElementById('rakhiTapHint');

    if (!draggableRakhi || !dropZone) return;

    let isSnapped = false;
    let isTied    = false;

    console.log('🧵 Enhanced Royal Rakhi engine initialized!');

    // 1. Click / Tap to Tie (Super smooth for mobile & trackpad users!)
    draggableRakhi.addEventListener('click', () => {
        if (isSnapped || isTied) return;
        snapRakhiToWrist();
    });

    draggableRakhi.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.key === ' ') && !isSnapped) {
            e.preventDefault();
            snapRakhiToWrist();
        }
    });

    dropZone.addEventListener('click', () => {
        if (isSnapped || isTied) return;
        snapRakhiToWrist();
    });

    // 2. Desktop Drag & Drop
    draggableRakhi.addEventListener('dragstart', e => {
        if (isSnapped) return;
        draggableRakhi.classList.add('dragging');
        draggableRakhi.style.transition = 'none';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', 'rakhi');
    });

    draggableRakhi.addEventListener('dragend', () => {
        draggableRakhi.classList.remove('dragging');
        draggableRakhi.style.transition = '';
    });

    dropZone.addEventListener('dragover', e => {
        if (isSnapped) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', e => {
        if (isSnapped) return;
        e.preventDefault();
        dropZone.classList.remove('drag-over');
        snapRakhiToWrist();
        console.log('✅ Rakhi dropped on wrist!');
    });

    // 3. Mobile Touch Drag
    let touchStartX = 0;
    let touchStartY = 0;
    let hasMoved = false;

    draggableRakhi.addEventListener('touchstart', e => {
        if (isSnapped) return;
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        hasMoved = false;
        draggableRakhi.classList.add('dragging');
    }, { passive: true });

    draggableRakhi.addEventListener('touchmove', e => {
        if (isSnapped) return;
        const touch = e.touches[0];
        const dist = Math.hypot(touch.clientX - touchStartX, touch.clientY - touchStartY);
        if (dist > 8) hasMoved = true;

        e.preventDefault();
        draggableRakhi.style.position  = 'fixed';
        draggableRakhi.style.left      = (touch.clientX - 47) + 'px';
        draggableRakhi.style.top       = (touch.clientY - 47) + 'px';
        draggableRakhi.style.transform = 'scale(1.15)';

        const rect = dropZone.getBoundingClientRect();
        if (touch.clientX >= rect.left - 20 && touch.clientX <= rect.right + 20 &&
            touch.clientY >= rect.top - 20  && touch.clientY <= rect.bottom + 20) {
            dropZone.classList.add('drag-over');
        } else {
            dropZone.classList.remove('drag-over');
        }
    }, { passive: false });

    draggableRakhi.addEventListener('touchend', e => {
        if (isSnapped) return;
        draggableRakhi.classList.remove('dragging');
        dropZone.classList.remove('drag-over');

        const touch = e.changedTouches[0];
        const rect  = dropZone.getBoundingClientRect();

        const inDropZone = (
            touch.clientX >= rect.left - 30 && touch.clientX <= rect.right + 30 &&
            touch.clientY >= rect.top - 30  && touch.clientY <= rect.bottom + 30
        );

        if (inDropZone || !hasMoved) {
            // Either dropped in zone OR tapped in place
            snapRakhiToWrist();
        } else {
            draggableRakhi.style.position  = '';
            draggableRakhi.style.left      = '';
            draggableRakhi.style.top       = '';
            draggableRakhi.style.transform = '';
        }
    });

    // 4. Snap to Wrist Action
    function snapRakhiToWrist() {
        if (isSnapped) return;
        isSnapped = true;

        if (navigator.vibrate) navigator.vibrate([40, 60, 80]);
        playRakhiChime(false);

        // Hide hint
        if (rakhiTapHint) rakhiTapHint.style.display = 'none';

        // Animate Rakhi directly onto wrist container
        draggableRakhi.classList.add('snapped', 'snapped-animate');
        draggableRakhi.removeAttribute('draggable');

        // Place Rakhi medallion directly on the wrist area (threads get hidden via CSS)
        draggableRakhi.style.position   = 'absolute';
        draggableRakhi.style.left       = '50%';
        draggableRakhi.style.top        = 'auto';
        draggableRakhi.style.bottom     = '0px';
        draggableRakhi.style.transform  = 'translateX(-50%)';
        draggableRakhi.style.transition = 'all 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)';

        // Move inside wrist container for perfect alignment across all screen sizes
        if (wristContainer && draggableRakhi.parentElement !== wristContainer) {
            wristContainer.appendChild(draggableRakhi);
        }

        // Hide drop indicator smoothly
        dropZone.style.opacity   = '0';
        dropZone.style.pointerEvents = 'none';

        // Show Sacred Tilak Mark with blessing aura
        if (sacredTilak) {
            sacredTilak.classList.remove('hidden');
        }

        // Wrap ceremonial ribbons around wrist
        if (wristBand) {
            wristBand.classList.add('tied');
        }

        createSnapParticles();

        setTimeout(() => {
            if (rakhiInstruction) {
                rakhiInstruction.style.transition = 'all 0.4s ease';
                rakhiInstruction.textContent = 'Placed on the wrist! ❤️ Now tie the knot.';
                rakhiInstruction.style.color = 'var(--gold)';
                rakhiInstruction.style.transform = 'scale(1.08)';
                setTimeout(() => rakhiInstruction.style.transform = 'scale(1)', 300);
            }
        }, 300);

        setTimeout(() => {
            btnTieRakhi.classList.remove('hidden');
            btnTieRakhi.style.animation = 'fadeInUp 0.6s cubic-bezier(0.68,-0.55,0.265,1.55)';
            addRippleEffectsToAllButtons();
        }, 600);
    }

    function createSnapParticles() {
        const symbols = ['✨', '💖', '⭐', '🌟', '🌸', '🪔'];
        const rect = wristContainer ? wristContainer.getBoundingClientRect() : { left: window.innerWidth/2, top: window.innerHeight/2, width: 0, height: 0 };
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height * 0.75;

        for (let i = 0; i < 22; i++) {
            const p = document.createElement('div');
            Object.assign(p.style, {
                position: 'fixed',
                left: centerX + 'px',
                top: centerY + 'px',
                fontSize: (Math.random() * 16 + 18) + 'px',
                pointerEvents: 'none',
                zIndex: '9999'
            });
            p.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            document.body.appendChild(p);

            const angle    = (Math.PI * 2 * i) / 22;
            const distance = Math.random() * 120 + 70;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;

            p.animate(
                [
                    { transform: 'translate(-50%,-50%) scale(0)', opacity: 0 },
                    { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.2)`, opacity: 1, offset: 0.5 },
                    { transform: `translate(calc(-50% + ${tx*1.4}px), calc(-50% + ${ty*1.4}px)) scale(0)`, opacity: 0 }
                ],
                { duration: 1100, easing: 'cubic-bezier(0.4,0,0.2,1)' }
            ).onfinish = () => p.remove();
        }
    }

    // 5. Tie Rakhi Button Click
    if (btnTieRakhi) {
        btnTieRakhi.addEventListener('click', () => {
            if (isTied) return;
            isTied = true;

            if (navigator.vibrate) navigator.vibrate([80, 100, 150]);
            playRakhiChime(true);

            btnTieRakhi.style.display = 'none';
            draggableRakhi.classList.add('tied');
            if (rakhiInstruction) rakhiInstruction.style.opacity = '0';

            // Auspicious blessing sparkle burst
            createSnapParticles();

            setTimeout(() => {
                const gameContainer = document.querySelector('.rakhi-game-container');
                if (gameContainer) {
                    gameContainer.style.transition = 'opacity 0.6s ease';
                    gameContainer.style.opacity = '0';
                }

                triggerRakhiCelebration();

                setTimeout(() => {
                    rakhiSuccess.classList.remove('hidden');
                    rakhiSuccess.style.animation = 'fadeInUp 0.8s ease-out';
                    addRippleEffectsToAllButtons();
                }, 400);

                console.log('🎉 Rakhi ceremonial knot tied!');
            }, 900);
        });
    }
}

// ================================================
// RAKHI CELEBRATION EFFECTS
// ================================================

function triggerRakhiCelebration() {
    createMassiveConfetti();
    setTimeout(() => createFallingHearts(),  200);
    setTimeout(() => createGoldenParticles(),400);
    setTimeout(() => createGlowingParticles(),600);
}

function createMassiveConfetti() {
    const symbols = ['🎉', '✨', '🎊', '⭐', '💫', '🌟'];
    for (let i = 0; i < 100; i++) {
        const c = document.createElement('div');
        c.className = 'celebration-particle';
        c.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        c.style.left     = Math.random() * 100 + 'vw';
        c.style.top      = '-50px';
        c.style.fontSize = Math.random() * 25 + 20 + 'px';
        c.style.filter   = `hue-rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(c);

        const sway     = (Math.random() - 0.5) * 100;
        const rotation = Math.random() * 1440 - 720;

        c.animate(
            [
                { transform: 'translateY(0) translateX(0) rotate(0deg) scale(0.5)', opacity: 0.2 },
                { transform: `translateY(${window.innerHeight*0.3}px) translateX(${sway*0.3}px) rotate(${rotation*0.5}deg) scale(1.2)`, opacity: 1, offset: 0.3 },
                { transform: `translateY(${window.innerHeight+100}px) translateX(${sway}px) rotate(${rotation}deg) scale(0.8)`, opacity: 0 }
            ],
            { duration: Math.random()*1500+2500, easing:'cubic-bezier(0.25,0.46,0.45,0.94)', delay: Math.random()*600 }
        ).onfinish = () => c.remove();
    }
}

function createFallingHearts() {
    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝'];
    for (let i = 0; i < 80; i++) {
        const h = document.createElement('div');
        h.className  = 'celebration-particle';
        h.innerHTML  = hearts[Math.floor(Math.random() * hearts.length)];
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top  = '-50px';
        h.style.fontSize = Math.random() * 30 + 25 + 'px';
        document.body.appendChild(h);

        const sway = (Math.random() - 0.5) * 150;

        h.animate(
            [
                { transform: 'translateY(0) translateX(0) scale(0.5) rotate(0deg)', opacity: 0 },
                { transform: `translateY(${window.innerHeight*0.5}px) translateX(${sway*0.5}px) scale(1.3) rotate(${Math.random()*30-15}deg)`, opacity: 1, offset: 0.5 },
                { transform: `translateY(${window.innerHeight+100}px) translateX(${sway}px) scale(0.8) rotate(${Math.random()*60-30}deg)`, opacity: 0 }
            ],
            { duration: Math.random()*2000+3000, easing:'cubic-bezier(0.4,0,0.2,1)', delay: Math.random()*800 }
        ).onfinish = () => h.remove();
    }
}

function createGoldenParticles() {
    const symbols = ['✨', '⭐', '💫', '🌟'];
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className  = 'celebration-particle';
        p.innerHTML  = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top  = Math.random() * 100 + 'vh';
        p.style.fontSize = Math.random() * 20 + 15 + 'px';
        p.style.filter   = 'drop-shadow(0 0 10px rgba(212,175,55,0.8))';
        document.body.appendChild(p);

        p.animate(
            [
                { transform: 'scale(0) rotate(0deg)', opacity: 0 },
                { transform: 'scale(1.8) rotate(180deg)', opacity: 1, offset: 0.5 },
                { transform: 'scale(0) rotate(360deg)', opacity: 0 }
            ],
            { duration: Math.random()*1000+2000, easing:'cubic-bezier(0.68,-0.55,0.265,1.55)', delay: Math.random()*1200 }
        ).onfinish = () => p.remove();
    }
}

function createGlowingParticles() {
    const colors = ['rgba(212,175,55,0.9)', 'rgba(255,143,171,0.9)', 'rgba(139,26,74,0.9)'];
    for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        const sz = Math.random() * 10 + 5 + 'px';
        const color = colors[Math.floor(Math.random() * colors.length)];
        Object.assign(p.style, {
            position: 'fixed', width: sz, height: sz,
            borderRadius: '50%', background: color,
            boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
            left: Math.random() * 100 + 'vw', top: Math.random() * 100 + 'vh',
            pointerEvents: 'none', zIndex: '9999'
        });
        document.body.appendChild(p);

        const angle    = Math.random() * Math.PI * 2;
        const dist     = Math.random() * 400 + 250;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;

        p.animate(
            [
                { transform: 'translate(0,0) scale(0)', opacity: 0 },
                { transform: `translate(${tx*0.5}px,${ty*0.5}px) scale(1.5)`, opacity: 1, offset: 0.3 },
                { transform: `translate(${tx}px,${ty}px) scale(0)`, opacity: 0 }
            ],
            { duration: Math.random()*1200+1800, easing:'cubic-bezier(0.4,0,0.2,1)', delay: Math.random()*800 }
        ).onfinish = () => p.remove();
    }
}

// ================================================
// INTERACTIVE LETTER OPENING
// ================================================

function initLetterOpening() {
    const btnOpenLetter    = document.getElementById('btnOpenLetter');
    const envelope         = document.getElementById('envelope');
    const envelopeFlap     = document.getElementById('envelopeFlap');
    const letterPaper      = document.getElementById('letterPaper');
    const afterLetter      = document.getElementById('afterLetter');

    if (!btnOpenLetter || !envelope || !envelopeFlap || !letterPaper) return;

    console.log('💌 Letter opening initialized!');
    let isOpened = false;

    btnOpenLetter.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;

        btnOpenLetter.style.transition = 'all 0.3s ease';
        btnOpenLetter.style.opacity    = '0';
        btnOpenLetter.style.transform  = 'translateY(20px)';
        setTimeout(() => btnOpenLetter.classList.add('hidden'), 300);

        createSealBreakParticles();

        // Open flap
        setTimeout(() => {
            envelopeFlap.style.transition = 'transform 0.9s cubic-bezier(0.68,-0.55,0.265,1.55)';
            envelopeFlap.classList.add('opening');
            envelope.classList.add('opened');
            envelope.style.animation = 'envelopeShake 0.4s ease';
        }, 200);

        // Slide letter out
        setTimeout(() => {
            letterPaper.classList.remove('hidden');
            letterPaper.classList.add('sliding-out');
            letterPaper.style.transition = 'all 1.2s cubic-bezier(0.34,1.56,0.64,1)';
            createLetterParticles();
        }, 700);

        // Fully unfold
        setTimeout(() => {
            envelope.style.transition = 'all 0.6s ease';
            envelope.style.opacity    = '0';
            envelope.style.transform  = 'scale(0.8) translateY(30px)';

            setTimeout(() => {
                letterPaper.classList.remove('sliding-out');
                letterPaper.classList.add('fully-open');
                letterPaper.style.animation = 'letterUnfold 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)';
                setTimeout(() => createLetterParticles(), 200);
                setTimeout(() => createLetterParticles(), 450);

                setTimeout(() => {
                    afterLetter.classList.remove('hidden');
                    afterLetter.style.animation = 'fadeInUp 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)';
                    addRippleEffectsToAllButtons();
                }, 1000);
            }, 500);
        }, 2100);

        console.log('✅ Letter opened!');
    });

    function createSealBreakParticles() {
        const symbols = ['💔', '✨', '⭐', '💫'];
        for (let i = 0; i < 14; i++) {
            const p = document.createElement('div');
            Object.assign(p.style, { position:'fixed', left:'50%', top:'40%', fontSize: (Math.random()*10+15)+'px', pointerEvents:'none', zIndex:'9999' });
            p.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            document.body.appendChild(p);

            const angle = (Math.PI * 2 * i) / 14;
            const dist  = Math.random() * 60 + 40;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;

            p.animate(
                [
                    { transform: 'translate(-50%,-50%) scale(0) rotate(0deg)', opacity: 1 },
                    { transform: `translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px)) scale(1) rotate(${Math.random()*360}deg)`, opacity: 1, offset: 0.6 },
                    { transform: `translate(calc(-50% + ${tx*1.5}px),calc(-50% + ${ty*1.5}px)) scale(0) rotate(${Math.random()*720}deg)`, opacity: 0 }
                ],
                { duration: 800, easing:'cubic-bezier(0.4,0,0.2,1)' }
            ).onfinish = () => p.remove();
        }
    }
}

// ================================================
// LETTER GLOWING PARTICLES
// ================================================

function createLetterParticles() {
    const colors = ['#D4AF37', '#FFB6C1', '#F4E5C2', '#FF8FAB'];
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.className  = 'letter-particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top  = Math.random() * 100 + 'vh';
        const color  = colors[Math.floor(Math.random() * colors.length)];
        p.style.background = color;
        p.style.boxShadow  = `0 0 15px ${color}, 0 0 30px ${color}`;
        document.body.appendChild(p);

        p.animate(
            [
                { transform: 'scale(0) rotate(0deg)', opacity: 0 },
                { transform: 'scale(1.8) rotate(180deg)', opacity: 1, offset: 0.5 },
                { transform: 'scale(0) rotate(360deg)', opacity: 0 }
            ],
            { duration: Math.random()*1000+1800, easing:'cubic-bezier(0.68,-0.55,0.265,1.55)', delay: Math.random()*600 }
        ).onfinish = () => p.remove();
    }
}

// ================================================
// INTERACTIVE GIFT BOX OPENING
// ================================================

function initGiftBoxOpening() {
    const btnOpenGift = document.getElementById('btnOpenGift');
    const giftBox = document.getElementById('giftBox');
    const giftLid = document.getElementById('giftLid');
    const ribbonH = document.getElementById('ribbonH');
    const ribbonV = document.getElementById('ribbonV');
    const ribbonBow = document.getElementById('ribbonBow');
    const innerLightBurst = document.getElementById('innerLightBurst');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const afterGift = document.getElementById('afterGift');
    const itemsContainer = document.getElementById('surpriseItemsContainer');

    if (!btnOpenGift || !giftBox) return;

    console.log('🎁 Premium gift box initialized!');
    let isOpened = false;

    // Get gift box position for spawning items
    function getGiftBoxCenter() {
        const rect = giftBox.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
    }

    btnOpenGift.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;

        console.log('🎁 Opening gift box with magical animation...');

        // Hide button
        btnOpenGift.style.transition = 'all 0.4s ease';
        btnOpenGift.style.opacity = '0';
        btnOpenGift.style.transform = 'scale(0.5) translateY(30px)';
        btnOpenGift.style.pointerEvents = 'none';

        // STAGE 1: Glow intensifies (0.5s)
        setTimeout(() => {
            giftBox.style.animation = 'giftBoxGlowUp 0.8s ease-out';
        }, 500);

        // STAGE 2: Ribbon snaps (1.2s)
        setTimeout(() => {
            giftBox.classList.add('opening');
            createRibbonSnapParticles();
        }, 1200);

        // STAGE 3: Lid opens with hinge (1.8s)
        setTimeout(() => {
            giftLid.style.transformOrigin = 'bottom center';
            giftLid.style.transform = 'rotateX(-120deg) translateY(-50px) translateZ(20px)';
            giftLid.style.transition = 'transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }, 1800);

        // STAGE 4: Inner light burst (2.5s)
        setTimeout(() => {
            if (innerLightBurst) {
                innerLightBurst.classList.remove('hidden');
                innerLightBurst.classList.add('active');
            }
        }, 2500);

        // STAGE 5: Chocolates pop out (2.8s)
        setTimeout(() => {
            createChocolates();
        }, 2800);

        // STAGE 6: Candies pop out (3.1s)
        setTimeout(() => {
            createCandies();
        }, 3100);

        // STAGE 7: Lollipops (3.4s)
        setTimeout(() => {
            createLollipops();
        }, 3400);

        // STAGE 8: Balloons float up (3.7s)
        setTimeout(() => {
            createBalloons();
        }, 3700);

        // STAGE 9: Hearts (4s)
        setTimeout(() => {
            createHearts();
        }, 4000);

        // STAGE 10: Confetti explosion (4.2s)
        setTimeout(() => {
            createConfettiBurst();
        }, 4200);

        // STAGE 11: Sweet message appears (5.5s)
        setTimeout(() => {
            surpriseMessage.classList.remove('hidden');
            surpriseMessage.classList.add('show');
        }, 5500);

        // STAGE 12: Continue button (7s)
        setTimeout(() => {
            afterGift.classList.remove('hidden');
            afterGift.style.animation = 'fadeInUp 0.8s cubic-bezier(0.68,-0.55,0.265,1.55)';
            addRippleEffectsToAllButtons();
        }, 7000);

        console.log('✅ Gift box animation sequence started!');
    });

    // Ribbon snap particles
    function createRibbonSnapParticles() {
        const symbols = ['✨', '⭐', '💫'];
        const center = getGiftBoxCenter();
        
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            p.style.position = 'fixed';
            p.style.left = center.x + 'px';
            p.style.top = (center.y - 30) + 'px';
            p.style.fontSize = (Math.random() * 12 + 12) + 'px';
            p.style.pointerEvents = 'none';
            p.style.zIndex = '9999';
            document.body.appendChild(p);

            const angle = (Math.PI * 2 * i) / 20;
            const dist = Math.random() * 60 + 40;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;

            p.animate([
                { transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', opacity: 1 },
                { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1) rotate(${Math.random()*360}deg)`, opacity: 1, offset: 0.5 },
                { transform: `translate(calc(-50% + ${tx*1.3}px), calc(-50% + ${ty*1.3}px)) scale(0) rotate(${Math.random()*720}deg)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }).onfinish = () => p.remove();
        }
    }

    // Create chocolates coming from box
    function createChocolates() {
        const chocolates = ['🍫', '🍫', '🍫', '🍫', '🍫'];
        const center = getGiftBoxCenter();
        
        chocolates.forEach((emoji, index) => {
            setTimeout(() => {
                const item = document.createElement('div');
                item.className = 'chocolate';
                item.innerHTML = emoji;
                item.style.left = center.x + 'px';
                item.style.top = center.y + 'px';
                item.style.setProperty('--horizontal-offset', `${(Math.random() - 0.5) * 250}px`);
                item.style.setProperty('--rotate-amount', `${Math.random() * 1440}deg`);
                item.style.fontSize = (Math.random() * 10 + 28) + 'px';
                document.body.appendChild(item);

                setTimeout(() => item.remove(), 3000);
            }, index * 150);
        });
    }

    // Create candies
    function createCandies() {
        const candies = ['🍬', '🍬', '🍬', '🍬', '🍬', '🍬'];
        const center = getGiftBoxCenter();
        
        candies.forEach((emoji, index) => {
            setTimeout(() => {
                const item = document.createElement('div');
                item.className = 'candy';
                item.innerHTML = emoji;
                item.style.left = center.x + 'px';
                item.style.top = center.y + 'px';
                item.style.setProperty('--horizontal-offset', `${(Math.random() - 0.5) * 280}px`);
                item.style.setProperty('--rotate-amount', `${-Math.random() * 1600}deg`);
                item.style.fontSize = (Math.random() * 10 + 26) + 'px';
                document.body.appendChild(item);

                setTimeout(() => item.remove(), 3200);
            }, index * 120);
        });
    }

    // Create lollipops
    function createLollipops() {
        const lollipops = ['🍭', '🍭', '🍭', '🍭'];
        const center = getGiftBoxCenter();
        
        lollipops.forEach((emoji, index) => {
            setTimeout(() => {
                const item = document.createElement('div');
                item.className = 'lollipop';
                item.innerHTML = emoji;
                item.style.left = center.x + 'px';
                item.style.top = center.y + 'px';
                item.style.setProperty('--horizontal-offset', `${(Math.random() - 0.5) * 260}px`);
                item.style.setProperty('--rotate-amount', `${Math.random() * 1800}deg`);
                item.style.fontSize = (Math.random() * 10 + 30) + 'px';
                document.body.appendChild(item);

                setTimeout(() => item.remove(), 3100);
            }, index * 180);
        });
    }

    // Create balloons floating up
    function createBalloons() {
        const balloons = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
        const center = getGiftBoxCenter();
        
        balloons.forEach((emoji, index) => {
            setTimeout(() => {
                const item = document.createElement('div');
                item.className = 'balloon';
                item.innerHTML = emoji;
                item.style.left = center.x + 'px';
                item.style.top = center.y + 'px';
                item.style.setProperty('--horizontal-drift', `${(Math.random() - 0.5) * 150}px`);
                item.style.setProperty('--rotate-amount', `${(Math.random() - 0.5) * 60}deg`);
                item.style.setProperty('--duration', `${Math.random() * 2 + 4}s`);
                item.style.fontSize = (Math.random() * 15 + 30) + 'px';
                document.body.appendChild(item);

                setTimeout(() => item.remove(), 6000);
            }, index * 200);
        });
    }

    // Create floating hearts
    function createHearts() {
        const hearts = ['💖', '💖', '💖', '💕', '💕', '💗', '💗'];
        const center = getGiftBoxCenter();
        
        hearts.forEach((emoji, index) => {
            setTimeout(() => {
                const item = document.createElement('div');
                item.className = 'heart-surprise';
                item.innerHTML = emoji;
                item.style.left = center.x + 'px';
                item.style.top = center.y + 'px';
                item.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 180}px`);
                item.style.setProperty('--rotate-amount', `${(Math.random() - 0.5) * 360}deg`);
                document.body.appendChild(item);

                setTimeout(() => item.remove(), 3500);
            }, index * 100);
        });
    }

    // Create confetti burst
    function createConfettiBurst() {
        const colors = ['#FF6B9D', '#C44569', '#FFC312', '#EE5A6F', '#FDA7DF', '#B33771', '#FDA7DF'];
        const shapes = ['▮', '●', '◆', '★', '♥'];
        const center = getGiftBoxCenter();
        
        for (let i = 0; i < 80; i++) {
            setTimeout(() => {
                const item = document.createElement('div');
                item.className = 'confetti-piece';
                item.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
                item.style.left = center.x + 'px';
                item.style.top = center.y + 'px';
                item.style.color = colors[Math.floor(Math.random() * colors.length)];
                item.style.fontSize = (Math.random() * 12 + 12) + 'px';
                
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 300 + 150;
                item.style.setProperty('--burst-x', `${Math.cos(angle) * distance}px`);
                item.style.setProperty('--burst-y', `${Math.sin(angle) * distance}px`);
                item.style.setProperty('--rotate-amount', `${Math.random() * 1080}deg`);
                item.style.setProperty('--duration', `${Math.random() * 1.5 + 1.5}s`);
                
                document.body.appendChild(item);
                setTimeout(() => item.remove(), 3000);
            }, i * 15);
        }
    }
}

// ================================================
// GIFT CELEBRATION EFFECTS
// ================================================

function createGiftConfetti() {
    const symbols = ['🎉', '✨', '🎊', '⭐', '💫', '🌟', '🎈'];
    for (let i = 0; i < 65; i++) {
        const c = document.createElement('div');
        c.className  = 'celebration-particle';
        c.innerHTML  = symbols[Math.floor(Math.random() * symbols.length)];
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top  = '-50px';
        c.style.fontSize = Math.random() * 20 + 20 + 'px';
        document.body.appendChild(c);

        c.animate(
            [
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight+100}px) rotate(${Math.random()*1080}deg)`, opacity: 0 }
            ],
            { duration: Math.random()*2000+2500, easing:'ease-out' }
        ).onfinish = () => c.remove();
    }
}

function createGiftHearts() {
    const hearts = ['❤️', '💖', '💕', '💗', '💓', '💝', '💞'];
    for (let i = 0; i < 55; i++) {
        const h = document.createElement('div');
        h.className  = 'celebration-particle';
        h.innerHTML  = hearts[Math.floor(Math.random() * hearts.length)];
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top  = '-50px';
        h.style.fontSize = Math.random() * 25 + 25 + 'px';
        document.body.appendChild(h);

        h.animate(
            [
                { transform: 'translateY(0) scale(1)', opacity: 1 },
                { transform: `translateY(${window.innerHeight+100}px) scale(1.5)`, opacity: 0 }
            ],
            { duration: Math.random()*2500+3000, easing:'ease-in', delay: Math.random()*300 }
        ).onfinish = () => h.remove();
    }
}

function createGoldenBurst() {
    const symbols = ['✨', '⭐', '💫', '🌟', '💛'];
    for (let i = 0; i < 42; i++) {
        const p = document.createElement('div');
        p.className  = 'celebration-particle';
        p.innerHTML  = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left = '50vw';
        p.style.top  = '50vh';
        p.style.fontSize = Math.random() * 20 + 15 + 'px';
        document.body.appendChild(p);

        const angle = (Math.PI * 2 * i) / 42;
        const dist  = 200 + Math.random() * 200;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;

        p.animate(
            [
                { transform: 'translate(0,0) scale(0)', opacity: 0 },
                { transform: `translate(${tx}px,${ty}px) scale(1.5)`, opacity: 1, offset: 0.5 },
                { transform: `translate(${tx}px,${ty}px) scale(0)`, opacity: 0 }
            ],
            { duration: 1500, easing:'ease-out' }
        ).onfinish = () => p.remove();
    }
}

// ================================================
// FINAL PAGE — PARTICLES & CELEBRATION
// ================================================

function createFinalParticles() {
    const container = document.getElementById('finalParticles');
    if (!container) return;

    const symbols = ['✨', '💖', '🌸', '⭐', '💫', '🎀'];
    for (let i = 0; i < 22; i++) {
        const p = document.createElement('div');
        p.className  = 'final-particle';
        p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        p.style.left              = Math.random() * 100 + 'vw';
        p.style.top               = Math.random() * 100 + 'vh';
        p.style.animationDelay    = Math.random() * 5 + 's';
        p.style.animationDuration = (12 + Math.random() * 8) + 's';
        container.appendChild(p);
    }

    console.log('✨ Final page particles created!');
}

function createFinalCelebration() {
    // Gentle golden burst for the final page
    setTimeout(() => createGoldenBurst(), 800);
    setTimeout(() => {
        const hearts = ['❤️', '💖', '💝', '💗'];
        for (let i = 0; i < 30; i++) {
            const h = document.createElement('div');
            h.className  = 'celebration-particle';
            h.innerHTML  = hearts[Math.floor(Math.random() * hearts.length)];
            h.style.left = Math.random() * 100 + 'vw';
            h.style.top  = '-50px';
            h.style.fontSize = Math.random() * 20 + 22 + 'px';
            document.body.appendChild(h);

            h.animate(
                [
                    { transform: 'translateY(0) scale(0.5)', opacity: 0.8 },
                    { transform: `translateY(${window.innerHeight+100}px) scale(1.2)`, opacity: 0 }
                ],
                { duration: Math.random()*3000+3500, easing:'ease-in', delay: Math.random()*1000 }
            ).onfinish = () => h.remove();
        }
    }, 1500);
}

// ================================================
// STANDALONE SUBPAGE COMPATIBILITY HANDLERS
// ================================================

function openLetter() {
    const letterContent = document.getElementById('letterContent');
    const envelope = document.getElementById('envelope');
    if (letterContent) {
        letterContent.classList.remove('hidden');
        letterContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
    if (envelope) {
        envelope.style.opacity = '0.5';
    }
    createLetterParticles();
    createConfetti();
}

function showFinalMessage() {
    const finalMsg = document.getElementById('finalMessage');
    if (finalMsg) {
        finalMsg.classList.remove('hidden');
        finalMsg.style.animation = 'fadeInUp 0.8s ease-out';
    }
    createMassiveConfetti();
    createFallingHearts();
}

// ================================================
// INIT COMPLETE
// ================================================

console.log('✅ All scripts initialized!');
console.log('🐵 Click "OPEN WINDOW" to begin the surprise!');
console.log('🎉 Premium Raksha Bandhan website ready!');



// ================================================
// MODERN LOADING SCREEN
// ================================================

(function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progressBar');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }, 200);
    
    // Hide loading screen when page is ready
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                // Remove from DOM after animation
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }
        }, 800); // Small delay for better UX
    });
    
    // Fallback: hide after 3 seconds even if load event doesn't fire
    setTimeout(() => {
        if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
            loadingScreen.classList.add('hidden');
        }
    }, 3000);
})();

// ================================================
// PERFORMANCE MONITORING
// ================================================

if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('📊 LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            console.log('⚡ FID:', entry.processingStart - entry.startTime);
        });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
}

// ================================================
// ENHANCED ACCESSIBILITY
// ================================================

// Add keyboard navigation hints
document.addEventListener('keydown', (e) => {
    // ESC key to close popups
    if (e.key === 'Escape') {
        const popup = document.getElementById('popupWindow');
        if (popup && popup.classList.contains('opened')) {
            // Add close logic here if needed
        }
    }
    
    // Tab key to show focus outlines
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});

// Mouse click to remove tab focus outlines
document.addEventListener('mousedown', () => {
    document.body.classList.remove('user-is-tabbing');
});

// ================================================
// IMAGE LAZY LOADING FALLBACK
// ================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================================
// SMOOTH SCROLL BEHAVIOR
// ================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
