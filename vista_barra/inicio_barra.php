
    <div class="menu">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
    </div>

    <div class="barra-lateral">
        <div>
            <div class="nombre-pagina">
                <ion-icon id="cloud" name="leaf-outline"></ion-icon>
                <span>OMA CECILIA<br> MARGARITA</span>
            </div>
            <div class="usuario">
                <div class="imgUserContainer">
                    <img id="imgUser" src="usuario.jpg" alt="">
                </div>
                <div class="info-usuario">
                    <div class="nombre-email">
                        <span id="usernameNav" class="nombre">
                        </span>
                        <span id="emailNav" class="email">Aun no disponible</span>
                    </div>
                    <div class="dropdown-threeP">
                        <ion-icon name="ellipsis-vertical-outline" class="menu-icon-access"
                            id="menu-icon-access"></ion-icon>
                        <ul class="dropdown-menu">
                            <li><a href="../../user_profile/userProfile/userProfile.html"><i
                                        class="fa-solid fa-id-badge"></i> Ver perfil</a></li>
                            <li><a href="../../php/sessionClose.php" id="logout"><i
                                        class="fa-solid fa-right-from-bracket"></i> Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div> <br><br>
        </div>

        

        <nav class="navegacion">
            <ul>
                <li>
                    <a id="inbox" href="javascript:goIndex()">
                        <ion-icon name="grid-outline"></ion-icon>
                        <span>Inicio</span>
                    </a>
                </li>
                <!---------------->
                <li class="initiative-dropdown">
                    <a href="#" data-target="initiative-dropdown">
                        <ion-icon name="star-outline"></ion-icon>
                        <span class="Item_Name">Tablas</span>
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </a>
    
                    <ul class="initiative-options">
                        <!--<a href="javascript:goToTablaAnimal()"></a>-->
                        <li><a href="javascript:goTablaEspecie()"><ion-icon name="paper-plane-outline"></ion-icon>Especie</a></li>
                        <li><a href="javascript:goTablaAnimal()"><ion-icon name="paper-plane-outline"></ion-icon>Animal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                        <li><a href="javascript:goTablaAlimento()"><ion-icon name="paper-plane-outline"></ion-icon>Alimento</a></li>
                        <li><a href="javascript:goTablaRecinto()"><ion-icon name="paper-plane-outline"></ion-icon>Recinto</a></li>
                        <li><a href="javascript:goTablaCategoria()"><ion-icon name="paper-plane-outline"></ion-icon>Categorias</a></li>
                    </ul>
                </li>
                <!-------nuevo desplegable--------->
                <li class="initiative-dropdown">
                    <a href="#" data-target="initiative-dropdown">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <span class="Item_Name">Formularios</span>
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </a>
    
                    <ul class="initiative-options">
                        <li><a href="#"><ion-icon name="paper-plane-outline"></ion-icon>Historial Clinico &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                        <li><a href="#"><ion-icon name="paper-plane-outline"></ion-icon>Acta de ingreso</a></li>
                        <li><a href="#"><ion-icon name="paper-plane-outline"></ion-icon>Dieta</a></li>
                    </ul>
                </li>
                <li class="initiative-dropdown">
                    <a href="#" data-target="initiative-dropdown">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <span class="Item_Name">Tabla Usuario</span>
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </a>
    
                    <ul class="initiative-options">
                        <li><a href="../../TABLAS/TablaTrabajador/trabajadortb.php"><ion-icon name="paper-plane-outline"></ion-icon>Trabajador &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                        <li><a href="../../TABLAS/TablaTrabajadorRol/roltb.php"><ion-icon name="paper-plane-outline"></ion-icon>Trabajador Rol</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="bookmark-outline"></ion-icon>
                        <span>Importante</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <span>Spam</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="cog-outline"></ion-icon>
                        <span>Configuracion</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="trash-outline"></ion-icon>
                        <span>Papelera</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div>
            <button class="boton">
                <ion-icon name="notifications-circle-outline"></ion-icon>
                <span>Recordatorio</span>
            </button><br>
        </div>

        <div>
            <div class="linea"></div>

            <div class="modo-oscuro">
                <div class="info">
                    <ion-icon name="moon-outline"></ion-icon>
                    <span>Drak Mode</span>
                </div>
                <div class="switch">
                    <div class="base">
                        <div class="circulo">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>