import React from 'react';

function TeamMembersForm (props) {
    const { data, update, build } = props

    const changeData = event => {
        const { name, value } = event.target
        update(name, value)
    }

    const changeBuild = event => {
        event.preventDefault()
        build()
    }

    return (
        <form className='form' changeBuild={changeBuild}>
            <div className='form entries'>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        onChange={changeData}
                        value={data.name}
                />
                </label>

                <label>Position
                    <input
                        type='text'
                        name='position'
                        onChange={changeData}
                        value={data.position}
                />
                </label>

                <label>Email
                    <input
                        type='email'
                        name='email'
                        onChange={changeData}
                        value={data.email}
                />
                </label>

                <label>Campus
                    <select value={data.campus} name='campus' onChange={changeData}>
                        <option value=''>--- select your campus ---</option>
                        <option value='San Diego'>San Diego</option>
                        <option value='Mpls'>Minneapolis</option>
                    </select>
                </label>

                <div className='build'>
                    <button disabled={!data.name || !data.position || !data.email || !data.campus}>Submit!</button>
                </div>
            </div>

        </form>
    )
}

export default TeamMembersForm