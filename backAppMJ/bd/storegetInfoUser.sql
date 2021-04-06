DELIMITER //
CREATE PROCEDURE getInfoUser
(IN mailUser VARCHAR (25))
BEGIN

    DECLARE idPeople INT;
    DECLARE typePeople VARCHAR (25);

    SELECT idmobUsers, mobUsersType 
    INTO idPeople, typePeople from mobUsers
    WHERE mobusersEmail = mailUser;

    IF (typePeople = 'CLI')
    THEN 
           SELECT mobUsers.idmobUsers, mobUsers.idmobUsers, mobUsers.mobUsersName, mobUsers.mobUsersApm, mobUsers.mobUsersApp, mobUsers.mobUsersGender, mobUsers.mobUsersBirth, mobUsers.mobUsersNac, 
           mobUsers.mobUsersEstudy, mobUsers.mobUsersCURP, mobUsers.mobUsersINE, mobUsers.mobUsersEmail, mobUsers.mobUsersPass, mobUsers.mobUsersType,
           solicitaServicio.solicitaServicioDate, solicitaServicio.solicitaServicioStatus,
           factura.facturaCosto,factura.facturaConcepto,factura.facturaDate
           from mobUsers
           LEFT JOIN solicitaServicio on mobUsers.idmobUsers=solicitaServicio.mobUsers_idmobUsers
           LEFT JOIN factura on mobUsers.idmobUsers=factura.mobUsers_idmobUsers
           WHERE idmobUsers = idPeople AND mobUsersType = typePeople;
    END IF;

    IF (typePeople = 'COL')
    THEN 
           SELECT mobUsers.idmobUsers, mobUsers.idmobUsers, mobUsers.mobUsersName, mobUsers.mobUsersApm, mobUsers.mobUsersApp, mobUsers.mobUsersGender, mobUsers.mobUsersBirth, mobUsers.mobUsersNac, 
           mobUsers.mobUsersEstudy, mobUsers.mobUsersCURP, mobUsers.mobUsersINE, mobUsers.mobUsersEmail, mobUsers.mobUsersPass, mobUsers.mobUsersType,
           solicitaServicio.solicitaServicioDate, solicitaServicio.solicitaServicioStatus, 
           factura.facturaCosto,factura.facturaConcepto,factura.facturaDate,
           servicio.servicioName, servicio.servicioCarac, servicio.servicioCosto, servicio.servicioPago, servicio.servicioCategory, servicio.servicioStatus
           from mobUsers
           LEFT JOIN solicitaServicio on mobUsers.idmobUsers=solicitaServicio.mobUsers_idmobUsers
           LEFT JOIN factura on mobUsers.idmobUsers=factura.mobUsers_idmobUsers
           LEFT JOIN servicio on mobUsers.idmobUsers=servicio.mobUsers_idmobUsers
           WHERE idmobUsers = idPeople AND mobUsersType = typePeople;
    END IF;

END //