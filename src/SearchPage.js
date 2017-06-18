import { h } from 'preact';
import { route } from 'preact-router';

const search = (queryAccountId) => {
    route(`/profile/${encodeURIComponent(queryAccountId)}`);
}

const SearchPage = () => {
    return(
        <section>
            <p>Enter an account of Github.</p>
            <input 
                type="search"
                placeholder="eg: mvpde06"
                onSearch={(e) => search(e.target.value)}
                />
        </section>
    )
}

module.exports = SearchPage;