package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "pon/testutil/keeper"
	"pon/x/pon/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.PonKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
