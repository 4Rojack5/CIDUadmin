export class Avaluo{
    
    uid: string;
    cliente: string;
    idavaluo: string;
    estado : string;
    mes : string;
    tipodocumento : string;
    identificacion : string;
    nombreCliente : string;
    direccion : string;
    ciudad : string;
    departamento : string;
    ubicacion : string;
    latitud : string;
    longitud : string;
    barrio : string;
    ciudadAvaluo : string;
    contacto : string;
    telefonoContacto : string;
    fechaAsignacion : string;
    fechaAgendamiento : string;
    fechaVisita : string;
    horaVisita : string;
    visitador : string;
    pagoVisitador : string;
    observaciones : string;
    fua : string;
    revisionFua : string;
    fechaEnvio : string;
    valorAvaluo : string;
    sitio : string;
    tipoAvaluo : string;

    constructor(uid: string, cliente: string, idavaluo: string, estado: string, mes: string
               ,tipodocumento: string, identificacion: string, nombreCliente: string
               ,direccion: string, ciudad: string, departamento : string, ubicacion: string
               ,latitud: string, longitud: string, barrio : string, ciudadAvaluo: string
               ,contacto: string, telefonoContacto: string, fechaAsignacion: string
               ,fechaAgendamiento: string, fechaVisita: string, horaVisita: string
               ,visitador: string, pagoVisitador: string, observaciones: string, fua: string
               ,revisionFua: string, fechaEnvio: string, valorAvaluo: string, sitio: string
               ,tipoAvaluo: string,
        ){
        this.uid = uid
        this.cliente = cliente
        this.idavaluo = idavaluo
        this.estado = estado
        this.mes = mes
        this.tipodocumento = tipodocumento
        this.identificacion = identificacion
        this.nombreCliente = nombreCliente
        this.direccion = direccion
        this.ciudad = ciudad
        this.departamento = departamento
        this.ubicacion = ubicacion
        this.latitud = latitud
        this.longitud = longitud
        this.barrio = barrio
        this.ciudadAvaluo = ciudadAvaluo
        this.contacto = contacto
        this.telefonoContacto = telefonoContacto
        this.fechaAsignacion = fechaAsignacion
        this.fechaAgendamiento = fechaAgendamiento
        this.fechaVisita = fechaVisita
        this.horaVisita = horaVisita
        this.visitador = visitador
        this.pagoVisitador = pagoVisitador
        this.observaciones = observaciones
        this.fua = fua
        this.revisionFua = revisionFua
        this.fechaEnvio = fechaEnvio
        this.valorAvaluo = valorAvaluo
        this.sitio = sitio
        this.tipoAvaluo = tipoAvaluo
    }

}