
async function crearTicket(payload){
  const r = await fetch(window.API_URL + '/tickets', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  return await r.json();
}
async function listarTickets(){
  const r = await fetch(window.API_URL + '/tickets');
  const j = await r.json();
  return j.data || [];
}
async function actualizarTicket(parcial){ // {id, estado?, prioridad?}
  const r = await fetch(window.API_URL + '/tickets/' + encodeURIComponent(parcial.id), {
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(parcial)
  });
  return await r.json();
}

// Envío de formulario
const form = document.getElementById('formTurno');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    const msg = document.getElementById('msg');
    try{
      const res = await crearTicket(payload);
      if(res.ok){
        msg.style.display='block';
        msg.style.color='#0d47a1';
        msg.textContent = '✅ Turno enviado. ID: ' + res.id;
        form.reset();
      }else{
        msg.style.display='block'; msg.style.color='#c0392b';
        msg.textContent = 'Error al enviar';
      }
    }catch(err){
      msg.style.display='block'; msg.style.color='#c0392b';
      msg.textContent = 'Error de red';
    }
  });
}

// DASHBOARD: listado, filtros, acciones
async function initDashboard(){
  const tbody = document.querySelector('#tabla tbody');
  const fEstado = document.getElementById('fEstado');
  const fPrio = document.getElementById('fPrio');
  const fQuery = document.getElementById('fQuery');
  const btnRef = document.getElementById('btnRefrescar');

  async function cargar(){
    const data = await listarTickets();
    const q = (fQuery.value||'').toLowerCase();

    const filtrado = data.filter(t=>{
      const okE = !fEstado.value || t.estado === fEstado.value;
      const okP = !fPrio.value || t.prioridad === fPrio.value;
      const okQ = !q || (t.nombre?.toLowerCase().includes(q) || t.telefono?.toLowerCase().includes(q));
      return okE && okP && okQ;
    }).sort((a,b)=> (b.fechaISO||'').localeCompare(a.fechaISO||''));

    tbody.innerHTML = '';
    for(const t of filtrado){
      const tr = document.createElement('tr');

      const badge = (est)=>{
        const map = {
          'Nuevo':'badge--nuevo','En diagnóstico':'badge--diag',
          'En reparación':'badge--repa','Listo':'badge--listo','Entregado':''
        };
        return `<span class="badge ${map[est]||''}">${est}</span>`;
      };

      tr.innerHTML = `
        <td>${(t.fechaISO||'').slice(0,10)}</td>
        <td><b>${t.nombre||''}</b><br><small>${t.telefono||''}</small></td>
        <td>${t.dispositivo||''}</td>
        <td>${t.prioridad||''}</td>
        <td>${badge(t.estado||'')}</td>
        <td>
          <select data-id="${t.id}" class="selEstado">
            ${['Nuevo','En diagnóstico','En reparación','Listo','Entregado']
              .map(s=>`<option ${s===(t.estado||'')?'selected':''}>${s}</option>`).join('')}
          </select>
        </td>`;
      tbody.appendChild(tr);
    }

    // Listeners para cambiar estado
    tbody.querySelectorAll('.selEstado').forEach(sel=>{
      sel.addEventListener('change', async ()=>{
        const id = sel.getAttribute('data-id');
        await actualizarTicket({ id, estado: sel.value });
        await cargar();
      });
    });
  }

  [fEstado,fPrio,fQuery].forEach(el=> el.addEventListener('input', cargar));
  btnRef.addEventListener('click', cargar);
  await cargar();
}

// Evitar doble init
if (!window.__dashInit) {
  window.__dashInit = true;
  window.addEventListener('DOMContentLoaded', initDashboard);
}
