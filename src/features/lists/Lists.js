import React, { useEffect } from 'react';
import List from "./list";
import { useGetListsQuery, useDeleteListMutation } from '../../service/listService';

export default function Lists() {

    // data:lists è un alias
    const {
        data: lists = [],
        error,
        refetch: reloadLists,
        isFetching } = useGetListsQuery();

    const [removeList, {
        isLoading: isDeleting,
        isSuccess,
        error: deleteError,
        isError
    }] = useDeleteListMutation();

    useEffect(() => {
        if (error) {
            console.log(error);
        }

        if (isFetching) {
            console.log('is fetching...');
        }

        if (!isFetching) {
            console.log('close fetching');
        }

        return () => {
        }
    }, [error, isFetching])

    const manageListRemotion = id => {
        removeList(id).unwrap().then(() => {
            reloadLists();
        }).catch(err => {
            console.log(err.message)
        })
    }


    return <ul className="list-group list-group-flush">
        {lists.map(list => <List
            onRemoveList={ id =>manageListRemotion(id)}
            listItem={list}
            key={list.id}
        />)}
    </ul>

}