import React from "react";
import imagen from "/workspaces/marioreact-hello/src/img/cat.jpg";

const Card = () => {
    return (
        <div class="card-group">
            <div class="card">
                <img src={ imagen } class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae ipsum dignissimos provident at obcaecati, commodi quod architecto iste exercitationem quibusdam consequuntur laudantium, minima natus dolor quo delectus officia eveniet.</p>
                <button type="button" class="btn btn-outline-primary">Find out more!</button>
                </div>
            </div>
            <div class="card">
                <img src={ imagen } class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum blanditiis dignissimos nihil tempora tenetur commodi nostrum molestiae nulla, animi explicabo est sapiente sint ipsa perferendis ab vitae officia architecto totam?</p>
                <button type="button" class="btn btn-outline-primary">Find out more!</button>
                </div>
            </div>
            <div class="card">
                <img src={ imagen } class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aliquam odio? Veritatis est laborum totam tempore, fuga rem dignissimos. Natus nemo perferendis, velit fuga non sequi a error odit voluptas.</p>
                <button type="button" class="btn btn-outline-primary">Find out more!</button>
                </div>
            </div>
            </div>
    )
}

export default Card;