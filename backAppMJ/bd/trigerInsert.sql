delimiter //
CREATE TRIGGER insertLogin AFTER INSERT ON mobUsers
       FOR EACH ROW
       BEGIN
           insert into loginUser values(null, NEW.idmobUsers);
       END;//
delimiter ;