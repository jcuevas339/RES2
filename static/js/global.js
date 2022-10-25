function eliminarUsuario(id, nombre){
    Swal.fire({
        title: 'Estas seguro de eliminar el Usuario '+nombre+ '?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            location.href="/admin/coordinador/borrar/"+id;
          Swal.fire(
            'Usuario '+nombre +' eliminado con exito!',
            '',
            'success'
          )
        }else{
            Swal.fire(
                'El usuario no fue borrado',
                '',
                'success'
              ) 
        }
      })
}


function eliminarEjecutivo(id, nombre){
  Swal.fire({
      title: 'Estas seguro de eliminar el Usuario '+nombre+ '?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
          location.href="/admin/ejecutivo/borrar/"+id;
        Swal.fire(
          'Usuario '+nombre +' eliminados con exito!',
          '',
          'success'
        )
      }else{
          Swal.fire(
              'El usuario no fue borrado',
              '',
              'success'
            ) 
      }
    })
}



function eliminarAsignacion(id, nombre){
  Swal.fire({
      title: 'Estas seguro de eliminar la asignacion con el del cliente '+nombre+ '?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
          location.href="/admin/asignacion/borrar/"+id;
        Swal.fire(
          'Usuario '+nombre +' eliminados con exito!',
          '',
          'success'
        )
      }else{
          Swal.fire(
              'El usuario no fue borrado',
              '',
              'success'
            ) 
      }
    })
}

function Sumar()
{
  a=document.f1.txtnumero1.value;
  b=document.f1.txtnumero2.value;
  c=parseInt(a)+parseInt(b);
  document.f1.txtresultado.value=c; 
}

function aprobarProyeccion(id, nombre){
  Swal.fire({
      title: 'Estas seguro de aprobarla proyeccion '+nombre+ '?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Aprobar!'
    }).then((result) => {
      if (result.isConfirmed) {
          location.href="/admin/proyeccion/aprobar/"+id;
        Swal.fire(
          'Proyeccion '+nombre +' aprobada con exito!',
          '',
          'success'
        )
      }else{
          Swal.fire(
              'La proyeccion no fue aprobada',
              '',
              'success'
            ) 
      }
    })
}

function rechazarProyeccion(id, nombre){
  Swal.fire({
      title: 'Estas seguro de rechazar la proyeccion '+nombre+ '?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Rechazar!'
    }).then((result) => {
      if (result.isConfirmed) {
          location.href="/admin/proyeccion/rechazar/"+id;
        Swal.fire(
          'Proyeccion '+nombre +' rechazada con exito!',
          '',
          'success'
        )
      }else{
          Swal.fire(
              'La proyeccion no se rachazo ',
              '',
              'success'
            ) 
      }
    })
}

//////////////////////////////////////////////////////////////////////////////////////////