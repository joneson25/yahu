const injuryData=[
{joint:'Shoulder Joint',items:['Rotator cuff tendinopathy/tear','Supraspinatus strain','Shoulder impingement','AC joint sprain','SLAP/labrum injury','Shoulder dislocation','Biceps tendinopathy','Frozen shoulder'],tests:'Neer, Hawkins-Kennedy, Empty Can, Full Can, Drop Arm, Speed, Yergason, O’Brien, Apprehension, Relocation, Sulcus, Lift Off, Belly Press',rehab:'Pain control → ROM → scapular control → rotator cuff strength → plyometric throw → RTS'},
{joint:'Elbow Joint',items:['Tennis elbow','Golfer elbow','UCL sprain','Olecranon bursitis','Triceps tendinopathy'],tests:'Cozen, Mill, Maudsley, Valgus Stress, Moving Valgus Stress',rehab:'Load management → wrist/elbow isometric → eccentric → grip strength → throwing progression'},
{joint:'Wrist & Hand',items:['TFCC injury','De Quervain','Carpal tunnel','Scaphoid injury','Finger sprain','Mallet finger'],tests:'Finkelstein, Watson, TFCC Load, Piano Key, Phalen, Tinel',rehab:'Protection → ROM → grip → proprioception → closed chain loading'},
{joint:'Cervical Spine',items:['Whiplash','Cervical radiculopathy','Facet joint irritation','Upper trap strain'],tests:'Spurling, Distraction, ULTT, Cervical rotation test',rehab:'Pain relief → deep neck flexor → mobility → postural strength'},
{joint:'Thoracic Spine',items:['Thoracic mobility restriction','Costovertebral dysfunction','Postural pain'],tests:'Thoracic rotation, rib springing, breathing assessment',rehab:'Breathing → thoracic mobility → scapular strength → loaded rotation'},
{joint:'Lumbar / SIJ',items:['Low back strain','Disc related pain','Facet syndrome','SIJ dysfunction','Spondylolisthesis'],tests:'SLR, Slump, Quadrant, Prone Instability, FABER, SIJ cluster',rehab:'Education → core control → hip hinge → loaded strength → sport specific'},
{joint:'Hip Joint',items:['FAI','Hip labrum','Glute tendinopathy','Hip flexor strain','Adductor strain','Piriformis syndrome'],tests:'FADIR, FABER, Scour, Thomas, Ober, Trendelenburg, resisted adduction',rehab:'Mobility → glute activation → adductor/hip strength → running/COD'},
{joint:'Knee Joint',items:['ACL injury','PCL injury','MCL/LCL sprain','Meniscus injury','Patellar tendinopathy','PFPS','ITB syndrome','Osgood-Schlatter'],tests:'Lachman, Anterior Drawer, Pivot Shift, Posterior Drawer, McMurray, Thessaly, Apley, Clarke, Noble, Valgus/Varus',rehab:'ROM → quad/hamstring strength → balance → hop → landing → RTS'},
{joint:'Ankle Joint',items:['ATFL sprain','CFL sprain','PTFL injury','Deltoid sprain','High ankle sprain','Achilles tendinopathy','Peroneal tendinopathy'],tests:'Anterior Drawer, Talar Tilt, Thompson, Kleiger, Squeeze, External Rotation Stress',rehab:'POLICE → ROM → peroneal strength → balance → hop → cutting'},
{joint:'Foot',items:['Plantar fasciitis','Turf toe','Stress fracture','Cuboid syndrome','Hallux valgus'],tests:'Windlass, metatarsal squeeze, navicular drop, hop pain test',rehab:'Load modification → foot intrinsic → calf strength → gait/run progression'}
];
const exerciseData=[
{area:'Shoulder',items:['Pendulum','Wall slide','Cane flexion','Sleeper stretch','Scapular setting','Band external rotation','Band internal rotation','Scaption','Face pull','Medicine ball chest pass']},
{area:'Elbow/Wrist',items:['Wrist extensor isometric','Eccentric wrist extension','Pronation/supination','Grip squeeze','Rice bucket','Wrist curl','Reverse wrist curl','Finger extension band']},
{area:'Spine/Core',items:['Cat camel','McGill curl up','Dead bug','Bird dog','Side plank','Pallof press','Glute bridge','Hip hinge drill','Farmer carry']},
{area:'Hip/Glute',items:['Clamshell','Side lying abduction','Monster walk','Hip thrust','Single leg bridge','Copenhagen plank','Adductor squeeze','Split squat','Step up','Lateral lunge']},
{area:'Knee',items:['Quad set','SLR','Wall sit','Spanish squat','Leg press','Hamstring curl','RDL','Step down','Split squat','Nordic hamstring']},
{area:'Ankle/Foot',items:['Ankle alphabet','Band eversion','Band inversion','Calf raise','Soleus raise','Toe yoga','Short foot','Single leg balance','Star excursion','Pogo jump']},
{area:'Balance',items:['Single leg stance','Eyes closed balance','Foam balance','Bosu balance','Perturbation','Y-balance reach','Single leg RDL reach']},
{area:'Plyometric/Agility',items:['Pogo jump','Squat jump','Box landing','Lateral hop','Skater hop','Drop jump','T-test','5-10-5 shuttle','Reactive cone drill','Sprint progression']}
];
const muscleData=[
['Rotator Cuff','Supraspinatus, infraspinatus, teres minor, subscapularis. Action: shoulder stability, ER/IR, abduction initiation.'],
['Scapular Muscles','Trapezius, serratus anterior, rhomboid, levator scapulae. Fokus: scapular control.'],
['Arm & Forearm','Biceps, triceps, wrist flexor/extensor, pronator/supinator. Fokus: grip, elbow control.'],
['Core','Transversus abdominis, multifidus, rectus abdominis, obliques, erector spinae. Fokus: anti-extension, anti-rotation.'],
['Hip & Glute','Glute max/med/min, piriformis, iliopsoas, adductor group, TFL. Fokus: hip stability.'],
['Thigh','Quadriceps, hamstrings, sartorius, gracilis. Fokus: knee control, sprint, jump.'],
['Leg & Foot','Gastrocnemius, soleus, tibialis anterior/posterior, peroneals, FHL, foot intrinsic. Fokus: ankle stability.']
];
const testData=[
{area:'Shoulder',tests:['Neer','Hawkins-Kennedy','Empty Can','Full Can','Drop Arm','Speed','Yergason','O’Brien','Apprehension','Relocation','Sulcus','Lift Off','Belly Press']},
{area:'Elbow',tests:['Cozen','Mill','Maudsley','Valgus Stress','Moving Valgus Stress']},
{area:'Wrist/Hand',tests:['Finkelstein','Watson','TFCC Load','Piano Key','Phalen','Tinel']},
{area:'Spine',tests:['Spurling','Distraction','ULTT','SLR','Slump','Quadrant','Prone Instability']},
{area:'Hip',tests:['FADIR','FABER','Scour','Thomas','Ober','Trendelenburg']},
{area:'Knee',tests:['Lachman','Anterior Drawer','Posterior Drawer','Pivot Shift','McMurray','Thessaly','Apley','Clarke','Noble','Valgus','Varus']},
{area:'Ankle/Foot',tests:['Anterior Drawer','Talar Tilt','Thompson','Kleiger','Squeeze','Windlass','Metatarsal Squeeze']}
];
function render(){
 document.getElementById('injuryCards').innerHTML=injuryData.map(x=>`<article><h3>${x.joint}</h3>${x.items.map(i=>`<span class="pill">${i}</span>`).join('')}<p><b>Special test:</b> ${x.tests}</p><p><b>Rehab:</b> ${x.rehab}</p></article>`).join('');
 document.getElementById('exerciseCards').innerHTML=exerciseData.map(x=>`<article><h3>${x.area}</h3>${x.items.map(i=>`<span class="pill">${i}</span>`).join('')}<p><b>Dos umum:</b> mobility 2-3 set, strength 3x8-15, balance 3x30s, plyometric 3x5-8 bergantung fasa.</p></article>`).join('');
 document.getElementById('muscleCards').innerHTML=muscleData.map(x=>`<article><h3>${x[0]}</h3><p>${x[1]}</p><p><b>Nota:</b> masukkan origin, insertion, action, nerve, stretch dan strengthening dalam update seterusnya.</p></article>`).join('');
 document.getElementById('testCards').innerHTML=testData.map(x=>`<article><h3>${x.area}</h3>${x.tests.map(i=>`<span class="pill">${i}</span>`).join('')}<p><b>Format:</b> tujuan, posisi pesakit, cara buat, positive sign, interpretasi.</p></article>`).join('');
}
function filterCards(inputId,containerId){const q=document.getElementById(inputId).value.toLowerCase();document.querySelectorAll(`#${containerId} article`).forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?'block':'none')}
function generateRehab(){
 const sport=document.getElementById('sport').value||'athlete'; const injury=document.getElementById('injurySelect').value; const pain=Number(document.getElementById('pain').value||4); const phase=document.getElementById('phase').value; const duration=document.getElementById('duration').value; const eq=document.getElementById('equipment').value||'band, bodyweight';
 const acute=pain>=6||phase==='Acute';
 const modality=acute?'Ice 10–15 min + compression/elevation + TENS high frequency 80–100Hz 15–20 min jika pain mengganggu. Elak heat awal jika swelling kuat.':'Heat pack 10 min sebelum exercise jika stiffness + TENS jika pain + ultrasound hanya jika sesuai; fokus utama tetap progressive loading.';
 const plans={
 'Ankle Sprain':['Ankle alphabet 2 set','Band eversion 3x12','Calf raise 3x12','Single leg balance 3x30s','Walking drill 5 min'],
 'ACL Injury':['Quad set 3x10','SLR 3x10','Heel slide 2x15','Mini squat 3x10','Weight shift 3x30s'],
 'Meniscus Injury':['Heel slide 2x15','Quad set 3x10','Bridge 3x12','Sit to stand 3x10','Step up low box 3x8'],
 'Patellar Tendinopathy':['Isometric wall sit 5x30s','Spanish squat 4x30s','Slow squat 3x8','Calf raise 3x15','Hip abduction 3x12'],
 'Achilles Tendinopathy':['Isometric calf hold 5x30s','Seated calf raise 3x12','Standing calf raise 3x10','Soleus stretch 3x30s','Walk progression 5-10 min'],
 'Hamstring Strain':['Isometric hamstring heel dig 5x20s','Glute bridge 3x12','RDL drill 3x10','Hamstring slider partial 3x8','Jog mechanics drill'],
 'Shoulder Impingement':['Pendulum 2 min','Wall slide 3x10','Scapular retraction 3x12','Band ER 3x12','Serratus wall push 3x10'],
 'Low Back Pain':['Cat camel 2x10','McGill curl up 3x8','Bird dog 3x8','Side plank 3x20s','Hip hinge drill 3x10'],
 'Wrist TFCC Injury':['Wrist ROM pain-free 2x10','Grip squeeze 3x15','Pronation/supination light 3x10','Isometric wrist extension 3x10','Closed chain weight shift modified'],
 'General Muscle Strain':['Pain-free ROM 2x15','Isometric contraction 5x20s','Light concentric 3x12','Functional movement drill','Stretch gentle 3x20s']
 };
 const tests={ 'Ankle Sprain':'Anterior Drawer, Talar Tilt, Squeeze/Kleiger jika high ankle sprain.', 'ACL Injury':'Lachman, Anterior Drawer, Pivot Shift, effusion check.', 'Meniscus Injury':'McMurray, Thessaly, Apley, joint line tenderness.', 'Patellar Tendinopathy':'Palpation inferior pole patella, single leg decline squat.', 'Achilles Tendinopathy':'Thompson, palpation tendon, calf raise endurance.', 'Hamstring Strain':'Active knee extension, resisted knee flexion, palpation.', 'Shoulder Impingement':'Neer, Hawkins, Empty Can, scapular dyskinesis.', 'Low Back Pain':'SLR, Slump, quadrant, neurological screen.', 'Wrist TFCC Injury':'TFCC load, piano key, ulnar fovea sign.', 'General Muscle Strain':'ROM, resisted test, palpation, functional test.'};
 document.getElementById('rehabOutput').innerHTML=`<h3>SOAP + Treatment Plan (${duration})</h3><div class="soap"><div><h3>S - Subjective</h3><p><b>Sport:</b> ${sport}</p><p><b>Main problem:</b> ${injury}</p><p><b>Pain:</b> ${pain}/10, phase ${phase}.</p><p><b>Aggravating:</b> movement/sport specific activity. <b>Easing:</b> rest, load modification, modality.</p></div><div><h3>O - Objective</h3><p><b>Check:</b> swelling, ROM, MMT, palpation, gait/movement quality.</p><p><b>Special test dicadang:</b> ${tests[injury]}</p><p><b>Equipment tersedia:</b> ${eq}</p></div><div><h3>A - Assessment</h3><p>Findings mungkin konsisten dengan ${injury}. Fokus impairment: pain, ROM limitation, strength deficit, neuromuscular control dan functional limitation.</p><p><b>Prognosis:</b> baik jika pain tidak meningkat selepas 24 jam dan progression ikut kriteria.</p></div><div><h3>P - Plan: 1 Sesi Rawatan</h3><p><b>Modaliti:</b> ${modality}</p><ol>${(plans[injury]||plans['General Muscle Strain']).map(e=>`<li>${e}</li>`).join('')}</ol><p><b>HEP:</b> pilih 3 exercise utama, 1-2 kali sehari, pain ≤3/10.</p><p><b>Criteria next session:</b> pain turun, ROM bertambah, no swelling baru, movement quality baik.</p></div></div>`;
}
render();
