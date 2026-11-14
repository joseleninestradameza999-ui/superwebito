const products = [
  {code:'SW-PER-001',name:'Mouse inalámbrico Logitech M170',price:49.9,category:'Periféricos',image:'photo-1527814050087-3793815479db'},
  {code:'SW-PER-002',name:'Teclado mecánico RGB compacto',price:189,category:'Periféricos',image:'photo-1587829741301-dc798b83add3'},
  {code:'SW-PER-003',name:'Audífonos gamer con micrófono',price:139.9,category:'Periféricos',image:'photo-1599669454699-248893623440'},
  {code:'SW-PER-004',name:'Mouse pad XL antideslizante',price:39.9,category:'Periféricos',image:'photo-1615663245857-ac93bb7c39e7'},
  {code:'SW-PER-005',name:'Webcam Full HD 1080p',price:119,category:'Periféricos',image:'photo-1587826080692-f439cd0b70da'},
  {code:'SW-PER-006',name:'Parlantes estéreo USB',price:69.9,category:'Periféricos',image:'photo-1589003077984-894e133dabab'},
  {code:'SW-PER-007',name:'Teclado inalámbrico slim',price:79.9,category:'Periféricos',image:'photo-1587829741301-dc798b83add3'},
  {code:'SW-PER-008',name:'Mouse gamer RGB 7200 DPI',price:89.9,category:'Periféricos',image:'photo-1615663245857-ac93bb7c39e7'},
  {code:'SW-PER-009',name:'Audífonos Bluetooth plegables',price:109,category:'Periféricos',image:'photo-1505740420928-5e560c06d30e'},
  {code:'SW-PER-010',name:'Soporte ergonómico para laptop',price:59.9,category:'Periféricos',image:'photo-1527864550417-7fd91fc51a46'},
  {code:'SW-CON-011',name:'Adaptador USB-C multipuerto 6 en 1',price:99.9,category:'Conectividad',image:'photo-1625842268584-8f3296236761'},
  {code:'SW-CON-012',name:'Hub USB 3.0 de 4 puertos',price:35,category:'Conectividad',image:'photo-1625842268584-8f3296236761'},
  {code:'SW-CON-013',name:'Cable HDMI 2.1 2 metros',price:29.9,category:'Conectividad',image:'photo-1597872200969-2b65d56bd16b'},
  {code:'SW-CON-014',name:'Adaptador Wi-Fi USB AC600',price:45,category:'Conectividad',image:'photo-1558618666-fcd25c85cd64'},
  {code:'SW-CON-015',name:'Cable USB-C carga rápida 1m',price:19.9,category:'Conectividad',image:'photo-1625948515291-69613efd103f'},
  {code:'SW-CON-016',name:'Adaptador USB-C a HDMI',price:42,category:'Conectividad',image:'photo-1625842268584-8f3296236761'},
  {code:'SW-CON-017',name:'Cable de red Cat 6 5 metros',price:24.9,category:'Conectividad',image:'photo-1558618666-fcd25c85cd64'},
  {code:'SW-CON-018',name:'Bluetooth USB 5.0',price:32,category:'Conectividad',image:'photo-1625948515291-69613efd103f'},
  {code:'SW-ALM-019',name:'Memoria USB 3.2 64 GB',price:29.9,category:'Almacenamiento',image:'photo-1618410320928-25228d811631'},
  {code:'SW-ALM-020',name:'SSD externo portátil 500 GB',price:229,category:'Almacenamiento',image:'photo-1597872200969-9b4c8e6c2d90'},
  {code:'SW-ALM-021',name:'Tarjeta microSD 128 GB',price:49,category:'Almacenamiento',image:'photo-1618410320928-25228d811631'},
  {code:'SW-ALM-022',name:'Carcasa externa SSD M.2',price:65,category:'Almacenamiento',image:'photo-1597872200969-2b65d56bd16b'},
  {code:'SW-ALM-023',name:'Memoria USB-C dual 128 GB',price:55,category:'Almacenamiento',image:'photo-1618410320928-25228d811631'},
  {code:'SW-COM-024',name:'Memoria RAM DDR4 8 GB',price:95,category:'Componentes',image:'photo-1562976540-1502c2145186'},
  {code:'SW-COM-025',name:'Ventilador para PC 120 mm RGB',price:45,category:'Componentes',image:'photo-1587202372775-e229f172b9d7'},
  {code:'SW-COM-026',name:'Pasta térmica de alto rendimiento',price:25,category:'Componentes',image:'photo-1587202372775-e229f172b9d7'},
  {code:'SW-ACC-027',name:'Base refrigerante para laptop',price:79.9,category:'Accesorios',image:'photo-1527864550417-7fd91fc51a46'},
  {code:'SW-ACC-028',name:'Organizador de cables de escritorio',price:18.9,category:'Accesorios',image:'photo-1625842268584-8f3296236761'},
  {code:'SW-ACC-029',name:'Limpiador de pantalla y microfibra',price:22,category:'Accesorios',image:'photo-1527864550417-7fd91fc51a46'},
  {code:'SW-ACC-030',name:'Protector de voltaje 6 tomas',price:49.9,category:'Accesorios',image:'photo-1558618666-fcd25c85cd64'}
];

const sellers = [
  {name:'Valeria Rojas',code:'VEN-001'},
  {name:'Diego Salazar',code:'VEN-002'},
  {name:'Camila Torres',code:'VEN-003'},
  {name:'Andrés Medina',code:'VEN-004'},
  {name:'Lucía Paredes',code:'VEN-005'}
];
const imageUrl = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=75`;
const soles = value => `S/ ${value.toFixed(2)}`;
const productGrid = document.querySelector('#product-grid');
let activeCategory = 'all';

function renderProducts(){
  const query = document.querySelector('#search').value.trim().toLocaleLowerCase('es');
  const visible = products.filter(p => (activeCategory === 'all' || p.category === activeCategory) && `${p.name} ${p.code} ${p.category}`.toLocaleLowerCase('es').includes(query));
  productGrid.innerHTML = visible.map(p => `<article class="product-card"><div class="product-image-wrap"><img loading="lazy" src="${imageUrl(p.image)}" alt="${p.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=75'"><span class="product-category">${p.category}</span></div><div class="product-info"><span class="product-code">${p.code}</span><h3>${p.name}</h3><strong class="product-price">${soles(p.price)}</strong></div></article>`).join('');
  document.querySelector('#empty-state').hidden = visible.length > 0;
}
document.querySelector('#search').addEventListener('input',renderProducts);
document.querySelector('#category-filter').addEventListener('change',e=>{activeCategory=e.target.value;syncPills();renderProducts()});
document.querySelector('#category-pills').addEventListener('click',e=>{const button=e.target.closest('[data-category]');if(!button)return;activeCategory=button.dataset.category;document.querySelector('#category-filter').value=activeCategory;syncPills();renderProducts()});
function syncPills(){document.querySelectorAll('.pill').forEach(p=>p.classList.toggle('active',p.dataset.category===activeCategory))}

const sellerSelect=document.querySelector('#seller-select');
sellerSelect.insertAdjacentHTML('beforeend',sellers.map(s=>`<option value="${s.code}">${s.name} · ${s.code}</option>`).join(''));
document.querySelector('#seller-directory').innerHTML=sellers.map(s=>`<div class="seller-chip">${s.name}<b>${s.code}</b></div>`).join('');
const cartBody=document.querySelector('#cart-body');
const feedback=document.querySelector('#sales-feedback');
let cart=[{productCode:'',quantity:1}];
function getProduct(code){return products.find(p=>p.code===code)}
function renderCart(){
  cartBody.innerHTML=cart.map((row,index)=>{
    const p=getProduct(row.productCode);const options=products.map(item=>`<option value="${item.code}" ${item.code===row.productCode?'selected':''}>${item.name}</option>`).join('');
    return `<tr data-index="${index}"><td><select class="product-select" aria-label="Producto ${index+1}"><option value="">Selecciona un producto</option>${options}</select></td><td class="product-code-cell">${p?p.code:'—'}</td><td class="product-price-cell">${p?soles(p.price):'—'}</td><td><input class="quantity-input" type="number" min="1" max="10" step="1" value="${row.quantity}" aria-label="Cantidad"></td><td class="row-total">${p?soles(p.price*row.quantity):'S/ 0.00'}</td><td><button class="delete-row" aria-label="Eliminar fila" title="Eliminar fila">×</button></td></tr>`;
  }).join('');
  updateTotals();
}
function updateTotals(){
  const units=cart.reduce((sum,row)=>sum+(Number(row.quantity)||0),0);
  const total=cart.reduce((sum,row)=>{const p=getProduct(row.productCode);return sum+(p?p.price*(Number(row.quantity)||0):0)},0);
  document.querySelector('#unit-count').textContent=units;
  document.querySelector('#sale-total').textContent=soles(total);
  document.querySelector('#add-row').disabled=units>=10;
  document.querySelectorAll('.quantity-input').forEach(input=>{const own=Number(input.value)||0;input.max=Math.max(1,10-(units-own))});
}
cartBody.addEventListener('change',e=>{
  const tr=e.target.closest('tr');if(!tr)return;const index=Number(tr.dataset.index);
  if(e.target.matches('.product-select'))cart[index].productCode=e.target.value;
  if(e.target.matches('.quantity-input')){
    let quantity=Math.floor(Number(e.target.value)||1);const others=cart.reduce((sum,row,i)=>sum+(i===index?0:(Number(row.quantity)||0)),0);
    quantity=Math.max(1,Math.min(quantity,10-others));cart[index].quantity=quantity;
  }
  feedback.textContent='';feedback.classList.remove('error');renderCart();
});
cartBody.addEventListener('click',e=>{if(!e.target.matches('.delete-row'))return;const index=Number(e.target.closest('tr').dataset.index);if(cart.length===1)cart=[{productCode:'',quantity:1}];else cart.splice(index,1);feedback.textContent='';renderCart()});
document.querySelector('#add-row').addEventListener('click',()=>{const units=cart.reduce((sum,row)=>sum+Number(row.quantity||0),0);if(units>=10)return;cart.push({productCode:'',quantity:1});renderCart();cartBody.lastElementChild?.querySelector('select').focus()});
document.querySelector('#cancel-sale').addEventListener('click',()=>{cart=[{productCode:'',quantity:1}];sellerSelect.value='';feedback.textContent='Venta cancelada. El carrito quedó limpio.';feedback.classList.remove('error');renderCart()});
document.querySelector('#save-sale').addEventListener('click',()=>{
  const seller=sellers.find(s=>s.code===sellerSelect.value);const units=cart.reduce((sum,row)=>sum+Number(row.quantity||0),0);const chosen=cart.filter(row=>row.productCode).map(row=>({row,product:getProduct(row.productCode)}));
  if(!seller){showError('Selecciona un vendedor antes de grabar la venta.');return}
  if(chosen.length===0){showError('Agrega al menos un producto al carrito.');return}
  if(units>10){showError('El máximo permitido es de 10 unidades por venta.');return}
  const total=chosen.reduce((sum,item)=>sum+item.product.price*Number(item.row.quantity),0);
  const lines=chosen.map(({row,product})=>`${product.name} (${product.code}) | ${row.quantity} x ${soles(product.price)} = ${soles(product.price*Number(row.quantity))}`);
  const subject=encodeURIComponent(`Venta Superwebito - ${seller.name} (${seller.code})`);
  const body=encodeURIComponent(`Detalle de venta - Superwebito\nFecha: ${new Date().toLocaleString('es-PE')}\nVendedor: ${seller.name} (${seller.code})\n\n${lines.join('\n')}\n\nUnidades: ${units}\nTOTAL: ${soles(total)}\n\nLocal: Av. Los Conquistadores 980, San Isidro, Lima`);
  feedback.textContent='Venta preparada. Completa el envío en tu aplicación de correo.';feedback.classList.remove('error');
  window.location.href=`mailto:joseleninestradameza999@gmail.com?subject=${subject}&body=${body}`;
});
function showError(message){feedback.textContent=message;feedback.classList.add('error')}
renderProducts();renderCart();
