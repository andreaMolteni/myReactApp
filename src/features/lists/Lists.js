import React, { useEffect } from 'react';
import List from "./list";
import { useGetListsQuery, useDeleteListMutation } from '../../service/listService';

export default function Lists() {

    // data:lists è un alias
    const {
        data: lists = [],
        error,
        // refetch: reloadLists, // serve per eseguire il reload di una lista dopo iìun aggiornamento (ora utilizzo i tag nella query)
        isFetching } = useGetListsQuery();

    const [removeList, {
        isLoading: isDeleting,
        isSuccess: isDeleted,
        error: deleteError
    }] = useDeleteListMutation();

    useEffect(() => {
        if (error) {
            console.log(error);
        }
        if (isFetching) {
            console.log('is fetching lists...');
        }
        if (!isFetching) {
            console.log('close fetching lists');
        }
        if (isDeleting) {
            console.log('is deleting a list...');
        }
        if (isDeleted) {
            console.log('The list is deleted...');
        }
        if (deleteError) {
            console.log(deleteError);
        }
        return () => {
        }
    }, [error, isFetching, isDeleting, isDeleted, deleteError ])

    const manageListRemotion = id => {
        removeList(id).unwrap().then(() => {
            // reloadLists();
        }).catch(err => {
            console.log(err.message)
        })
    }


    return <ul className="list-group list-group-flush">
        {lists.map(list => <List
            onRemoveList={id => {manageListRemotion(id)}}
            listItem={list}
            key={list.id}
        />)}
    </ul>

}